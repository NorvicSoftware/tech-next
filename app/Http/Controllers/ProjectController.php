<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
use Inertia\Inertia;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('person', 'career', 'image')->get();
        return Inertia::render('Projects/Index', ['projects' => $projects]);  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('Projects/Form', ['persons' => $persons, 'careers' => $careers, 'id' => 0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|min:8|max:150',
            'qualification' => 'required|min:1|max:100',
            'year' => 'required|min:3|max:4',
            'manager' => 'required|min:8|max:150',
            'person_id' => 'required|exists:persons,id',
            'career_id' => 'required|exists:careers,id',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        /* $project = Project::create([
            'title' => $request->title,
            'qualification' => $request->qualification,
            'year' => $request->year,
            'manager' => $request->manager,
            'person_id' => $request->person_id,
            'career_id' => $request->career_id,
        ]); */

        $project = new Project();
        $project->title = $request->title;
        $project->qualification = $request->qualification;
        $project->year = $request->year;
        $project->manager = $request->manager;
        $project->person_id = $request->person_id;
        $project->career_id = $request->career_id;
        $project->save();

        $imageName = $this->loadImage($request);

        if($imageName !== '') {
            $project->image()->create(['url' => 'img/projects/'. $imageName]);
        }

        return redirect()->route('projects.index')->with('success', 'Proyecto agregado exitosamente');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::with('person', 'career', 'image')->findOrFail($id); 
        return Inertia::render('Projects/Show', ['project' => $project]); 
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('Projects/Form', ['project' => $project, 'persons' => $persons, 'careers' => $careers, 'id' => $id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $project = Project::find($id);

        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->filled('title')) {
            $project->title = $request->title;
        }
        if ($request->filled('qualification')) {
            $project->qualification = $request->qualification;
        }
        if ($request->filled('year')) {
            $project->year = $request->year;
        }
        if ($request->filled('manager')) {
            $project->manager = $request->manager;
        }
        if ($request->filled('person_id')) {
            $project->person_id = $request->person_id;
        }
        if ($request->filled('career_id')) {
            $project->career_id = $request->career_id;
        }

        if ($request->hasFile('image')) {
            $imageName = $this->loadImage($request);
            if ($imageName !== '') {
                if ($project->image) {
                    Storage::delete('public/' . $project->image->url);
                    $project->image()->delete();
                }
                $project->image()->create(['url' => 'img/projects/' . $imageName]);
            }
        }

        $project->save();

        return redirect()->route('projects.index')->with('success', 'Los datos del proyecto han sido actualizados exitosamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Proyecto eliminado exitosamente.');
    }

    public function generateReport()
    {
        $goodProjects = Project::where('grade', '>=', 0)
            ->where('grade', '<=', 70)
            ->orWhere('grade', '>', 70)
            ->where('grade', '<=', 85)
            ->orWhere('grade', '>', 85)
            ->where('grade', '<=', 100)
            ->orderByDesc('grade')
            ->get();

        return view('projects.report', ['goodProjects' => $goodProjects]);
    }

    /**
     * Este método se encarga de subir una imagen en el directorio "storage/app/public/img/projects"
     * @return return retorna el nombre de la imagen.
     */
    public function loadImage($request){
        $image_name = '';
        if($request->hasFile('image')) {
            $destination_path = public_path('img/projects');
            $image = $request->file('image');
            $image_name = time() . '_' . $image->getClientOriginalName();
            $image->move($destination_path, $image_name);
        }
        return $image_name;
    }
}
