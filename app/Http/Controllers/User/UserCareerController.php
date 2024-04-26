<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Career;
use App\Models\Project;
use Inertia\Inertia;

class UserCareerController extends Controller
{
    public function getCareers(){
        //$careers = Career::where('university_id', '=', 1);
        $careers = Career::take(8)->get();
        return Inertia::render('Users/Careers', ['careers' => $careers]);
    }
}
