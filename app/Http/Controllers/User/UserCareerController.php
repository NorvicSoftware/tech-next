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
<<<<<<< HEAD
        return Inertia::render(component: 'Users/Careers', props: ['careers' => $careers]);
=======
        return Inertia::render('Users/Careers', ['careers' => $careers]);
>>>>>>> 043c476c83fdc04f353f72c313e7a5e0ac445ecc
    }
}
