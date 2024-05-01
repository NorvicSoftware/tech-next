<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Person;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ProjectsImport;
use App\Imports\PersonsImport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ImportController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        $persons = Person::all();

        return Inertia::render('Imports/Index', [
            'projects' => $projects,
            'persons' => $persons,
        ]);
    }

    public function import(Request $request)
    {
        try {
            Excel::import(new PersonsImport, 'persona.xlsx');
            Excel::import(new ProjectsImport, 'proyectos.xlsx');
            // Devolver una respuesta JSON con un mensaje de éxito
            return response()->json(['success' => 'La importación fue exitosa!'], 200);
        } catch (\Throwable $e) {
            // Manejar el error
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4ecf9d4ece8c1eed10e3392f5e15a60755ad0933
