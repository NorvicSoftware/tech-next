<?php

namespace App\Http\Controllers;

use App\Models\Score;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ScoreController extends Controller
{

    public function index()
    {
        $scores = Score::with('project')->get();
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }

    public function create()
    {
        $projects = Project::all();
        return Inertia::render('Scores/Create', ['projects' => $projects]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|in:Bueno,Indiferente,Malo',
            'project_id' => 'required|exists:projects,id',
        ]);
    
        Score::create($validatedData);

        // $projects = Project::all();
        // $scores = Score::with('project')->get();
        
        // return Inertia::render('', [
        //     'projects' => $projects,
        //     'scores' => $scores,
        //     'success' => 'Puntuación creada exitosamente.'
        // ]);
    }
    
    public function show(string $id)
    {
        $score = Score::findOrFail($id)->load('project');
        return Inertia::render('Scores/Show', ['score' => $score]);
    }
    public function edit(string $id)
    {
        $score = Score::findOrFail($id);
        $projects = Project::all();

        return Inertia::render('Scores/Edit', ['score' => $score, 'projects' => $projects]);
    }

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

    public function destroy($id)
    {
        $score = Score::findOrFail($id);
        $score->delete();
    
        return redirect()->route('scores.index')->with('success', 'Puntuación eliminada con éxito.');
    }
    
}