<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Score;

class ReactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $scores = Score::all();
        return response()->json($scores);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        return view('reactions.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id'
        ]);

        $score = new Score();
        $score->reaction = $request->reaction;
        $score->project_id = $request->project_id;
        $score->save();

        return redirect()->route('reactions.index')->with('success', 'Reacción creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $score = Score::findOrFail($id);
        return response()->json($score);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $score = Score::findOrFail($id);
        return view('reactions.edit', compact('score'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'reaction' => 'required|in:1,2,3',
            'project_id' => 'required|exists:projects,id'
        ]);

        $score = Score::findOrFail($id);
        $score->reaction = $request->reaction;
        $score->project_id = $request->project_id;
        $score->save();

        return redirect()->route('reactions.index')->with('success', 'Reacción actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $score = Score::findOrFail($id);
        $score->delete();

        return redirect()->route('reactions.index')->with('success', 'Reacción eliminada exitosamente.');
    }
}

