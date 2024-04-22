<?php

namespace App\Http\Controllers;
use App\Models\Project;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function type1()
{
    $projects = Project::whereIn('classification', ['Bueno', 'Muy Bueno', 'Excelente'])
        ->orderByDesc('final_grade')
        ->get();

    return view('reports.type1', ['projects' => $projects]);
}


    public function type2()
    {
        return view('reports.type2');
    }

    public function type3()
    {
        return view('reports.type3');
    }
}
