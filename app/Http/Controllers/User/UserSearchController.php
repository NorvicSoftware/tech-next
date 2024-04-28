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
        if($request->search == ''){
            $career = Career::findOrFail($career_id);
            $projects = $career->projects()->with('person', 'scores')->get();
        }
        else {
            $career = Career::findOrFail($career_id);
            $projects = $career->projects()->with('person', 'scores')->where('title', 'like', '%'. $request->search . '%')->get();
        }
        
        return Inertia::render('Users/Projects', ['projects' => $projects, 'career' => $career, 'career_id' => $career_id]);
    }
    
}
