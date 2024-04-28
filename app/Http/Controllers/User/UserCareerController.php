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
        $careers = Career::where('university_id', '=', 1)->get();
<<<<<<< HEAD
        //$careers = Career::take(8)->get();
=======
>>>>>>> 51e6c4a0b267175292ab38e7e1d9421d2b25a166
        return Inertia::render('Users/Careers', ['careers' => $careers]);
    }
}
