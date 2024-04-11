<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $university = University::all();
        return view('universities.index', ['universities' => $university]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('universities.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $university = new University($request->all());
        $university->save();
        return redirect()->action([UniversityController::class, 'index']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $university = University::findOrFail($id);
        return view('universities.view', [
            'university' => $university
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $university = University::findOrFail($id);
        return view("universities.edit", ["university" => $university]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $university = University::findOrFail($id);
        $university->name = $request->name;
        $university->phone = $request->phone;
        $university->address = $request->address;
        $university->save();
        return redirect()->action([UniversityController::class, 'index']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        try {
            // Encuentra la universidad por su ID
            $university = University::findOrFail($id);
            
            // Elimina la universidad
            $university->delete();
            
            // Redirige de vuelta con un mensaje de éxito
            return redirect()->route('universities.index')->with('success', 'Universidad eliminada exitosamente.');
        } catch (\Exception $e) {
            // Maneja cualquier error que pueda ocurrir
            return redirect()->route('universities.index')->with('error', 'No se pudo eliminar la universidad: ' . $e->getMessage());
        }
    }
}