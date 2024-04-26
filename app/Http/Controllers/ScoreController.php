<?php

namespace App\Http\Controllers;

use App\Models\Score;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtiene todas las puntuaciones y carga el proyecto relacionado
        $scores = Score::with('project')->get();
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Obtiene todos los proyectos para mostrar en el formulario de creación de puntuación
        $projects = Project::all();
        return Inertia::render('Scores/Create', ['projects' => $projects]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validar los datos de la solicitud
        $validatedData = $request->validate([
            'reaction' => 'required|in:Bueno, Indiferente, Malo',
            'project_id' => 'required|exists:projects,id',
        ]);

        // Crear una nueva puntuación
        Score::create($validatedData);

        // Redirigir con un mensaje de éxito
        return redirect()->route('scores.index')->with('success', 'Puntuación creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Encuentra la puntuación por ID y carga el proyecto relacionado
        $score = Score::findOrFail($id)->load('project');
        return Inertia::render('Users/Show', ['score' => $score]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Encuentra la puntuación por ID
        $score = Score::findOrFail($id);
        
        // Obtiene todos los proyectos para mostrar en el formulario de edición de puntuación
        $projects = Project::all();

        return Inertia::render('Scores/Edit', ['score' => $score, 'projects' => $projects]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Encuentra la puntuación por ID
        $score = Score::findOrFail($id);

        // Validar los datos de la solicitud
        $validatedData = $request->validate([
            'reaction' => 'required|in:good,indifferent,bad',
            'project_id' => 'required|exists:projects,id',
        ]);

        // Actualiza la puntuación con los datos validados
        $score->update($validatedData);

        // Redirigir con un mensaje de éxito
        return redirect()->route('scores.index')->with('success', 'Puntuación actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $score = Score::findOrFail($id);
        $score->delete();
    
        return redirect()->route('scores.index')->with('success', 'Puntuación eliminada con éxito.');
    }
    
}