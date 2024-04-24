<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        return Inertia::render('Projects/Create', ['persons' => $persons, 'careers' => $careers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $project = Project::create([
            'title' => $request->title,
            'qualification' => $request->qualification,
            'year' => $request->year,
            'manager' => $request->manager,
            'person_id' => $request->person_id,
            'career_id' => $request->career_id,
        ]);

        $imageName = $this->loadImage($request);

        if($imageName !== '') {
            $project->image()->create(['url' => 'images/projects/'. $imageName]);
        }

        return redirect()->route('projects.index')->with('succes', 'Proyecto agregado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::with('person', 'career')->findOrFail($id);
        $image = null;
        if($project->image) {
            $image = $project->image->url;
        }
        return Inertia::render('Projects/Show', ['project' => $project, 'image' => $image]); 
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('Projects/Edit', ['project' => $project, 'persons' => $persons, 'careers' => $careers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
        ]);

        $project->update($validatedData);

        return redirect()->route('projects.index')->with('success', 'Proyecto actualizado exitosamente.');
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
     * Este método se encarga de subir una imagen en el directorio "storage/app/public/images/projects"
     * @return return retorna el nombre de la imagen.
     */
    public function loadImage($request){
        $image_name = '';
        if($request->hasFile('image')) {
            $destination_path = 'public/images/projects';
            $image = $request->file('image');
            $image_name = time() . '_' . $image->getClientOriginalName();
            $request->file('image')->storeAs($destination_path, $image_name);
        }
        return $image_name;
    }
}
