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
        return Inertia::render('projects/index', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('projects/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        // Crear un nuevo proyecto
        $project = new Project;
        $project->title = $request->title;
        $project->description = $request->description;
        // capas ayan mas campos que asignar 
        $project->save();

        return redirect('/projects')->with('success', 'Proyecto creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('projects/show', ['project' => $project]); // Renderiza la vista del proyecto
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return Inertia::render('projects/edit', ['project' => $project]); // Renderiza el formulario de edición
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            //validaciones
        ]);

        // Encuentra el proyecto por su ID y actualiza sus campos
        $project = Project::findOrFail($id);
        $project->title = $request->title;
        $project->description = $request->description;
        // capas ayan mas campos que asignar
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
