<?php

namespace App\Http\Controllers;
use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('person', 'career', 'image')->get();
        return Inertia::render('Users/Project', ['projects' => $projects]); 
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }
}
