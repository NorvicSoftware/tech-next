<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;
use Inertia\Inertia;

class UniversityController extends Controller
{
    public function index()
    {
        $universities = University::all();
        return Inertia::render('Universities/Index', ['universities' => $universities]);
    }
    


    public function create()
    {
        $universities = University::all();
        return Inertia::render('Universities/Form', ["universities"=>$universities, 'id'=>0]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name'=> 'required|string|max:75',
                'phone'=> 'nullable|string|max:15',
                'address'=> 'nullable|string|max:75',
            ]);
            University::create($validatedData);
            return redirect()->route( 'universities.index')->with('success','La universidad se ha creado correctamente');
        }catch (\Exception $exc) {
        return redirect()->back()->withInput()->with('error', 'Error al crear universidad: ' . $exc->getMessage());
        }
    }

    
    public function edit(string $id)
    {
        $university = University::findOrFail($id);
        return Inertia::render('Universities/Form', ['university' => $university, 'id'=>$id]);

    }
    
    public function show(string $id){
        $university = University::findOrFail($id);
        return Inertia::render('Universities/Show', ['university' => $university]);
    }
    

// UniversityController.php
public function update(Request $request, $id)
{
    try {
        $validatedData = $request->validate([
            'name'=> 'required|string|max:75',
            'phone'=> 'nullable|string|max:15',
            'address'=> 'nullable|string|max:75',
        ]);
        $university = University::findOrFail($id);
        $university->update($validatedData);
        return redirect()->route('universities.index')->with('success','La universidad se ha actualizado correctamente');
    } catch(\Exception $exc) {
        return redirect()->back()->withInput()->withErrors(['msg' => "Error al actualizar la universidad"]);
    }
}


    public function destroy(string $id)
    {
        try {
            $universities = University::findOrFail($id);
            $universities->delete();
            return redirect()->route( "universities.index")->with('success','Registro eliminado correctamente'); 

        } catch (\Exception $e) {
            return  redirect()->back()
                ->withInput()->withErrors(['msg'=>'error al eliminar universidad']);
        }
    }
}
