<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;
use Inertia\Inertia;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Universities = University::all();
        return Inertia::render('Universities/Index', ['universities' => $Universities]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Universities/Form',  ['id' => 0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        
        $university = new University();
        $university->name = $request->name;
        $university->phone = $request->phone;
        $university->address = $request->address;
        $university->save();

        return redirect()->route( 'universities.index')->with('success','La universidad se ha creado correctamente'); 

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $university = University::find($id);
        return Inertia::render('Universities/Form', ['university' => $university, 'id' => $id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $university = University::find($id);
        $university->name = $request->name;
        $university->phone = $request->phone;
        $university->address = $request->address;
        $university->save();

        return redirect()->route( 'universities.index')->with('success','La universidad se ha creado correctamente'); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $university = University::find($id);
        $university->delete();
    }
}
