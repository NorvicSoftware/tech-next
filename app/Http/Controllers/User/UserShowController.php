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
    public function getShow(string $id)
    {
        $project = Project::with('person', 'career')->findOrFail($id); 
        return Inertia::render('User/Show', ['project' => $project]); 
    }
}
