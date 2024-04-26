<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Career;
use App\Models\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserShowController extends Controller
{
    public function getShow()
    {
        $project = Project::with('person', 'career'); 
        return Inertia::render('User/Show', ['project' => $project]); 
    }
}
