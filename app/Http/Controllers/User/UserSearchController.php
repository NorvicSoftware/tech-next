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
    /**
     * Display a listing of the resource.
     */
    

    /**
     * Show the form for creating a new resource.
     */
    public function getProject()
    {
        $projects = Project::with('person', 'career', 'image')->get();
        return Inertia::render('Users/Projects', ['projects' => $projects]);
    }

    public function getProjectsByCareer($careerId)
    {
        $career = Career::findOrFail($careerId);
        $projects = $career->projects()->with('person', 'scores')->get();
        
        return Inertia::render('Users/Projects', ['projects' => $projects, 'career' => $career]);
    }

    public function search($searchValue, $career_id, $career)
    {
        $projects = null;
        if ($searchValue === 0) {
            // seleccionar todos los proyectos de la carrera seleccionada.
            $projects = Project::where('career_id', '=', $career_id)->get();
        } else {
            // mostrar lo que se ha encontrado
            $projects = Project::where('career_id', '=', $career_id)->where('title', 'like', '%' . $searchValue . '%')->get();
        }
        return Inertia::render('Users/Projects', ['projects' => $projects, 'career' => $career]);
        //$project = Project::where('title', 'like', '%'. $search . '%');
    }

    /* public function searchProjects(Request $request)
    {
        $search = $request->input('search');

        $projects = Project::where('title', 'like', "%$search%")->get();

        return Inertia::render('Users/Projects', ['projects' => $projects]);
    } */

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
    /* public function obtenerProyecto($id) {
        $proyecto = Proyecto::findOrFail($id);
        $qualifications = $proyecto->qualification; // Suponiendo que 'calificacion' es el campo donde está la nota del proyecto
        return Inertia::render(['proyecto' => $proyecto, 'calificacion' => $calificacion]);
    } */
    
}
