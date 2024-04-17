<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Score;
use App\Models\Project;
use Inertia\Inertia;

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
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id',
        ]);

        Score::create($validatedData);

        return redirect()->route('scores.index')->with('success', 'Score created successfully');
    }

    public function edit($id)
    {
        $score = Score::findOrFail($id);
        $projects = Project::all();
        return Inertia::render('Scores/Edit', ['score' => $score, 'projects' => $projects]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id',
        ]);

        $score = Score::findOrFail($id);
        $score->update($validatedData);

        return redirect()->route('scores.index')->with('success', 'Score updated successfully');
    }

    public function destroy($id)
    {
        $score = Score::findOrFail($id);
        $score->delete();

        return redirect()->route('scores.index')->with('success', 'Score deleted successfully');
    }
}
