<?php

namespace App\Http\Controllers;

use App\Models\Career;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    /* public function index()
    {
        $projects = Project::with('person', 'career', 'image')->get();
        return Inertia::render('Users/List', ['projects' => $projects]);  
    } */

    public function showCareers()
    {
        $careers = Career::all();
        return Inertia::render('Public/Careers', ['careers' => $careers->toArray()]);
    }

    public function showProjectsByCareer($careerId)
    {
        $career = Career::findOrFail($careerId);
        $projects = $career->projects()->paginate(10); // Puedes ajustar el número de proyectos por página según tus necesidades
        return Inertia::render('Public/ProjectsByCareer', ['career' => $career, 'projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
        //
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
}
