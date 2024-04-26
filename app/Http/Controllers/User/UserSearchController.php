<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function search($search)
    {
        $project = Project::where('title', 'like', '%'. $search . '%');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getProject()
    {
        /* $projects = Project::all();
        return Inertia::render('Users/Projects', ['projects' => $projects]); */
        $projects = Project::whereHas('career', function ($query) {
            $query->whereBetween('id', [1, 8]);
        })->get();

        return Inertia::render('Users/Projects', ['projects' => $projects]);
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
