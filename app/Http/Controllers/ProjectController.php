<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use Illuminate\Http\Request;
use App\Models\Project;
=======
use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97
use Inertia\Inertia;

use Illuminate\Http\Request;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
<<<<<<< HEAD
        $projects = Project::all(); // Obtener todos los proyectos
        return Inertia::render('Projects/Index', ['projects' => $projects]);
=======
        $projects = Project::with('person', 'career')->get();
        return Inertia::render('Projects/Index', ['projects' => $projects]);  
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
<<<<<<< HEAD
        return Inertia::render('Projects/Create');
=======
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('Projects/Create', ['persons' => $persons, 'careers' => $careers]);
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
<<<<<<< HEAD
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
=======
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
        ]);

        Project::create($validatedData);
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97

        return redirect()->route('projects.index')->with('success', 'Proyecto creado exitosamente.');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
<<<<<<< HEAD
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('Projects/Show', ['project' => $project]); // Renderiza la vista del proyecto
=======
        $project = Project::findOrFail($id); 
        return Inertia::render('projects.show', ['project' => $project]); 
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
<<<<<<< HEAD
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('Projects/Edit', ['project' => $project]); // Renderiza el formulario de edición
=======
        $project = Project::findOrFail($id);
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('Projects/Edit', ['project' => $project, 'persons' => $persons, 'careers' => $careers]);
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        $validatedData = $request->validate([
<<<<<<< HEAD
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
=======
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
        ]);

        $project->update($validatedData);
>>>>>>> 77dc8ef904c6938a3d43f0a7badb93c553897f97

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
}
