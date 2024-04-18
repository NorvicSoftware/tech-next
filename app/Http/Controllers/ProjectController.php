<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
use Inertia\Inertia;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('person', 'career')->get();
        return Inertia::render('projects/index', ['projects' => $projects]);  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('projects/create', ['persons' => $persons, 'careers' => $careers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
        ]);

        Project::create($validatedData);

        return redirect()->route('projects.index')->with('success', 'Proyecto creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::findOrFail($id); 
        return Inertia::render('projects.show', ['project' => $project]); 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        $persons = Person::all();
        $careers = Career::all();
        return Inertia::render('projects/edit', ['project' => $project, 'persons' => $persons, 'careers' => $careers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required',
            'qualification' => 'required',
            'year' => 'required',
            'manager' => 'required',
            'person_id' => 'required',
            'career_id' => 'required',
        ]);

        $project->update($validatedData);

        return redirect()->route('projects.index')->with('success', 'Proyecto actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Proyecto eliminado exitosamente.');
    }
}
