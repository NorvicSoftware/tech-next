<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all(); // Obtener todos los proyectos
        return Inertia::render('Projects/Index', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
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

        return redirect('/projects')->with('success', 'Proyecto creado exitosamente.');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('Projects/Show', ['project' => $project]); // Renderiza la vista del proyecto
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('Projects/Edit', ['project' => $project]); // Renderiza el formulario de edición
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
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

        return redirect('/projects')->with('success', 'Proyecto actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect('/projects')->with('success', 'Proyecto eliminado exitosamente.');
    }
}
