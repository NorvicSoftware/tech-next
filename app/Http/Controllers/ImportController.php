<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Person;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ProjectsImport;
use App\Imports\PersonsImport;
use Illuminate\Http\Request;

class ImportController extends Controller
{
    public function showImportForm()
    {
        return view('import.form');
    }

    public function importProjects(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls',
        ]);

        Excel::import(new ProjectsImport, $request->file('file'));

        return redirect()->back()->with('success', 'Projects imported successfully.');
    }

    public function importPersons(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx,xls',
        ]);

        Excel::import(new PersonsImport, $request->file('file'));

        return redirect()->back()->with('success', 'Persons imported successfully.');
    }
}
