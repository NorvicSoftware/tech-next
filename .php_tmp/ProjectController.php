<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all(); // Obtener todos los proyectos
        return view('projects.index', ['projects' => $projects]); // Renderizar la vista con los proyectos
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('projects.create');
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
        return view('projects.show', ['project' => $project]); // Renderiza la vista del proyecto
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id); // Encuentra el proyecto por su ID
        return view('projects.edit', ['project' => $project]); // Renderiza el formulario de edición
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
