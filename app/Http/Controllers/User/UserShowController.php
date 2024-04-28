<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Score;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserShowController extends Controller
{
    public function showProjectById($id)
    {
        $project = Project::with('person', 'career', 'scores')->findOrfail($id); 
        return Inertia::render('Users/Show', ['project' => $project, 'id' => $id]); 
    }

    public function store(Request $request, $id){
        $request->validate([
            'reaction' => 'required|in:Bueno,Indiferente,Malo',
            // 'project_id' => 'required|exists:projects,id',
        ]);
        
        $score = new Score();
        $score->reaction = $request->reaction;
        $score->project_id = $id;
        $score->save();

        // return Inertia::render('Users/Show', ['project' => $project, 'id' => $id]); 

    }
}
