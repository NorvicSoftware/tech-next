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
        return Inertia::render('Scores/Form', ['projects' => $projects, 'id' => 0]);
    }

    /**
     * Store a newly created resource in storage.
     */

     public function store(Request $request)
     {
         $request->validate([
             'project_id' => 'required|exists:projects,id',
             'good' => 'required|numeric|min:0',
             'indifferent' => 'required|numeric|min:0',
             'bad' => 'required|numeric|min:0',
         ]);
     
         for ($i = 0; $i < $request->good; $i++) {
             $score = new Score();
             $score->project_id = $request->project_id;
             $score->reaction = 'good';
             $score->save();
         }
     

         for ($i = 0; $i < $request->indifferent; $i++) {
             $score = new Score();
             $score->project_id = $request->project_id;
             $score->reaction = 'indifferent';
             $score->save();
         }
     

         for ($i = 0; $i < $request->bad; $i++) {
             $score = new Score();
             $score->project_id = $request->project_id;
             $score->reaction = 'bad';
             $score->save();
         }

    return redirect()->route('scores.index')->with('success', 'Puntuación creada exitosamente.');
}


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $score = Score::findOrFail($id);
        $projects = Project::all();
        return Inertia::render('Scores/Form', ['initialData' => $score, 'projects' => $projects, 'id' => $id]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'project_id' => 'required|exists:projects,id',
            'good' => 'required|numeric|min:0',
            'indifferent' => 'required|numeric|min:0',
            'bad' => 'required|numeric|min:0',
        ]);
    
        $score = Score::findOrFail($id);
        // Eliminar las puntuaciones existentes para esta reacción
        $score->where('project_id', $score->project_id)->delete();
        // Crear las nuevas puntuaciones con los valores actualizados
        for ($i = 0; $i < $request->good; $i++) {
            $score = new Score();
            $score->project_id = $request->project_id;
            $score->reaction = 'good';
            $score->save();
        }
    
        for ($i = 0; $i < $request->indifferent; $i++) {
            $score = new Score();
            $score->project_id = $request->project_id;
            $score->reaction = 'indifferent';
            $score->save();
        }
    
        for ($i = 0; $i < $request->bad; $i++) {
            $score = new Score();
            $score->project_id = $request->project_id;
            $score->reaction = 'bad';
            $score->save();
        }
    
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
