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
        $scores = Score::with('project')->get();
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects = Project::all();
        return Inertia::render('Scores/create', ['projects' => $projects]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id',

        ]);

    
        $score = new Score;
        $score->reaction = $request->reaction;
        $score->project_id = $request->project_id;
        $score->save();

        return redirect('/scores')->with('success', 'Puntuación creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $score = Score::with('project')->findOrFail($id);
        return Inertia::render('scores/show', ['score' => $score]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $score = Score::with('project')->findOrFail($id);
        $projects = Project::all();
        return Inertia::render('scores/edit', ['score' => $score, 'projects' => $projects]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id',

        ]);

   
        $score = Score::findOrFail($id);
        $score->reaction = $request->reaction;
        $score->project_id = $request->project_id;

        $score->save();

        return redirect('/scores')->with('success', 'Puntuación actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $score = Score::findOrFail($id);
        $score->delete();

        return redirect('/scores')->with('success', 'Puntuación eliminada exitosamente.');
    }
}


