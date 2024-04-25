<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Career;
use App\Models\University;
use Inertia\Inertia;
use Inertia\Response;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */    
    public function index()
    {
        $careers = Career::with('university')->get();
        return Inertia::render('Careers/Index', ['careers' => $careers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $universities = University::all();
        return Inertia::render('Careers/Form', ['universities' => $universities, 'id' => 0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:50',
            'phone' => 'nullable|regex:/^[0-9]+$/|min:5|max:15',
            'university_id' => 'required|Integer|exists:universities,id'
        ]);
        Career::create($validated);
        DB::beginTransaction();
        try {
            $career = new Career();
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            DB::commit();
            return redirect()->route('careers.index')->with('success', 'La carrera  fue creada exitosamente');
        }catch (\Exception $exc){
            DB::rollback();
            return redirect()->route('careers.index')->with('error', 'Error al crear la carrera ');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $career = Career::findOrFail($id);
        return Inertia::render('careers.show', ['career' => $career]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $career = Career::find($id);
        $universities = University::all();
        return Inertia::render('Careers/Form', ['career' => $career, 'universities' => $universities, 'id' => $id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $career = Career::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|max:50',
            'phone' => 'nullable|regex:/^[0-9]+$/|min:5|max:15',
            'university_id' => 'required|Integer|exists:universities,id'
        ]);

        $career->update($validated);
        DB::beginTransaction();
        try {
            $career = Career::findOrFail($id);
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            $career->update($validated);
            DB::commit();
            return redirect()->route('careers.index')->with('success', 'La carrera fue actualizada exitosamente');
        }catch (\Exception $exc){
            DB::rollback();
            return redirect()->route('careers.index')->with('error', 'Error al editar la carrera ');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $career = Career::findOrFail($id);
            $career->delete();
            DB::commit();
            return redirect()->route('careers.index')->with('success', 'La carrera fue eliminada exitosamente');
        }catch (\Exception $exc){
            DB::rollback();
            return redirect()->route('careers.index')->with('error', 'Error al eliminar la carrera');
        }
    }
}