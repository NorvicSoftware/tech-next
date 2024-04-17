<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;
use Inertia\Inertia;

class UniversityController extends Controller
{
 
    public function index()
    {
        //
        $university = University::all();
        return Inertia::render('Univesities/Index', ['univeristies' => $university]);
    }


    public function create()
    {
        //
        return Inertia::render('Universities/Create');
    }


    public function store(Request $request)
    {
        //
        try {
            $validatedData = $request->validate([
                'name'=> 'required|string|max:75',
                'phone'=> 'required|string|max:15',
                'address'=> 'required|string|max:75',
            ]);
            University::create($validatedData);
            return redirect()->route( 'universities.index')->with('success','La universidad se ha creado correctamente');
        }catch (\Exception $exc) {
        return redirect()->back()->withInput()->with('error', 'Error al crear universidad: ' . $exc->getMessage());
        }
    }


    
    public function edit($id)
    {
        //
        $university = University::findOrFail($id);
        return Inertia::render('Universities/Create', ['university'=>$university]);
    }
    
    
    public function update(Request $request,  $id)
    {
        try{
            $validatedData = $request->validate([
                'name'=> 'required|string|max:75',
                'phone'=> 'required|string|max:15',
                'address'=> 'required|string|max:75',
            ]);
            $university= University::findOrFail($id);
            $university->update($validatedData);
            return  redirect()->route('universities.index')->with('success','La universidad se ha actualizado correctamente');
        }catch(\Exception $exc){
            return  redirect()->back()->withInput()->withErrors(['msg' => "Error al actualizar la universidad"]);
        }
    }

    
    public function destroy(string $id)
    {
        //
        try {
            $university = University::findOrFail($id);
            $university->delete();
            return redirect()->route( "universities.index")->with('success','Registro eliminado correctamente'); 

        } catch (\Exception $e) {
            return  redirect()->back()
                ->withInput()->withErrors(['msg'=>'error al eliminar universidad']);
        }
    }
}
