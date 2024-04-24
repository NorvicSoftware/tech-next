<?php

namespace App\Http\Controllers;

use App\Models\Score;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtener todas las puntuaciones con los proyectos relacionados
        $scores = Score::with('project')->get();

        // Retornar la vista index con las puntuaciones
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Obtener todos los proyectos para mostrar en el formulario de creación
        $projects = Project::all();

        return Inertia::render('Scores/Create', ['projects' => $projects]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|in:good,indifferent,bad',
            'project_id' => 'required|exists:projects,id',
        ]);
    
        Score::create($validatedData);
    
        return redirect()->route('scores.index')->with('success', 'Puntuación creada exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Obtener la puntuación por su ID
        $score = Score::findOrFail($id);
        
        // Obtener todos los proyectos para mostrar en el formulario de edición
        $projects = Project::all();

        return Inertia::render('Scores/Form', ['score' => $score, 'projects' => $projects]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $score = Score::findOrFail($id);
    
        $validatedData = $request->validate([
            'reaction' => 'required|in:good,indifferent,bad',
            'project_id' => 'required|exists:projects,id',
        ]);
    
        $score->update($validatedData);
    
        return redirect()->route('scores.index')->with('success', 'Puntuación actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Obtener la puntuación por su ID y eliminarla
        $score = Score::findOrFail($id);
        $score->delete();

        // Redirigir a la vista index con un mensaje de éxito
        return redirect()->route('scores.index')->with('success', 'Puntuación eliminada con éxito.');
    }

}
