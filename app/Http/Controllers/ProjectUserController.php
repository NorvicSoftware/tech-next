<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Person;
use App\Models\Career;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectUserController extends Controller
{
    public function index()
    {
        $projects = Project::with('person', 'career', 'image')->get();
        return Inertia::render('Users/Project', ['project' => $projects]);  
    }

}