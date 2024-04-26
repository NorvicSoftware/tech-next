<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Career;
use App\Models\University;
use Inertia\Inertia;
use Inertia\Response;


class UserCareerController extends Controller
{
    public function index()
    {
        $careers = Career::with('university')->get();
        return Inertia::render('Careers/Index', ['careers' => $careers]);
    }

    public function show(string $id)
    {
        $career = Career::findOrFail($id);
        return Inertia::render('careers.show', ['career' => $career]);
    }
}
