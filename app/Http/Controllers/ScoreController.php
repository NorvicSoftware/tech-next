<?php

namespace App\Http\Controllers;

use App\Models\Score;
use App\Models\Project;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ScoreController extends Controller
{

    public function index()
    {
        $scores = Score::with('project')->get();
        return Inertia::render('Scores/Index', ['scores' => $scores]);
    }
    
}