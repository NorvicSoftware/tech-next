<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;

class UserShowController extends Controller
{
    public function getShow(Request $request)
    {
        $projects = Project::with('person', 'career', 'reaction', 'image');
        foreach($projects as $project)[
            $project->personimg = Image::where('project', '=', $project->$id)
        ];
        return Inertia::render('User/Project', ['projects' => $projects]); 
    }
}
