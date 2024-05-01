<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Career;
use App\Models\Person;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSearchController extends Controller
{   

    public function getProjectsByCareer($career_id)
    {
        $career = Career::findOrFail($career_id);
        $projects = $career->projects()->with('person', 'scores')->get();
        
        return Inertia::render('Users/Projects', ['projects' => $projects, 'career' => $career, 'career_id' => $career_id ]);
    }

    public function searchProjectsByCareer(Request $request, string $career_id)
    {
        try {
            $title = $request->input('title');
            $projects = Project::where('title', 'like', '%'. $title . '%')->get();
    
            // Devolver los resultados de búsqueda
            //return response()->json(['projects' => $projects]);
            return Inertia::render('Users/Projects', ['projects' => $projects]);
        } catch (\Exception $e) {
            // Manejar cualquier error y devolver una respuesta adecuada
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $project = Project::with('person', 'career')->findOrfail($id); 
        // return Inertia::render('Users/Show', ['project' => $project]); 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function obtenerProyecto($id) {
        $proyecto = Proyecto::findOrFail($id);
        $qualifications = $proyecto->qualification; // Suponiendo que 'calificacion' es el campo donde está la nota del proyecto
        return Inertia::render(['proyecto' => $proyecto, 'calificacion' => $calificacion]);
        if($request->search == ''){
            $career = Career::findOrFail($career_id);
            $projects = $career->projects()->with('person', 'scores', 'image')->get();
        }
        else {
            $career = Career::findOrFail($career_id);
            $projects = $career->projects()->with('person', 'scores')->where('title', 'like', '%'. $request->search . '%')->get();
        }
        
        return Inertia::render('Users/Projects', ['projects' => $projects, 'career' => $career, 'career_id' => $career_id]);
    }
    
}
