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
        $validatedData = $request->validate([

            'title' => 'required|string|max:150',
            'qualification' => 'required|integer',
            'year' => 'required|string|max:4',
            'manager' => 'required|string|max:150',
            'person_id' => 'required|exists:persons,id',
            'career_id' => 'required|exists:careers,id',
        ]);

        // Crear un nuevo proyecto
        $project = new Project;
        $project->title = $request->title;
        $project->qualification = $request->qualification;
        $project->year = $request->year;
        $project->manager = $request->manager;
        $project->person_id = $request->person_id;
        $project->career_id = $request->career_id;
        $project->save();

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
        return Inertia::render('Projects/Show', ['project' => $project]); 

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
        return Inertia::render('Projects/Form', ['project' => $project, 'persons' => $persons, 'careers' => $careers, 'id' => $id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string|max:150',
            'qualification' => 'required|integer',
            'year' => 'required|string|max:4',
            'manager' => 'required|string|max:150',
            'person_id' => 'required|exists:persons,id',
            'career_id' => 'required|exists:careers,id',
        ]);

        // Encuentra el proyecto por su ID y actualiza sus campos
        $project = Project::findOrFail($id);
        $project->title = $request->title;
        $project->qualification = $request->qualification;
        $project->year = $request->year;
        $project->manager = $request->manager;
        $project->person_id = $request->person_id;
        $project->career_id = $request->career_id;
        $project->save();

        $validatedData['button_disabled'] = true;
        

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
