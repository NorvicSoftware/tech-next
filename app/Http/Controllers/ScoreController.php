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

        $scores = Score::with('project')->get();
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }

    /**

     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'reaction' => 'required|in:Bueno,Indiferente,Malo',
            'project_id' => 'required|exists:projects,id',
        ]);


        Score::create($validatedData);

        return redirect()->route('scores.index')->with('success', 'Puntuación creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $score = Score::findOrFail($id);
        

        $projects = Project::all();

        return Inertia::render('Scores/Edit', ['score' => $score, 'projects' => $projects]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $score = Score::findOrFail($id);


        $validatedData = $request->validate([
            'reaction' => 'required|in:Bueno,Indiferente,Malo',
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

    }
    
}