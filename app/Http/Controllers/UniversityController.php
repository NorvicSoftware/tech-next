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
        return Inertia::render('Univesities/Index', ['univeristies' => $universities]);
    }


    public function create()
    {
        return Inertia::render('Universities/Create');
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


    
    public function edit($id)
    {
        $universities = University::findOrFail($id);
        return Inertia::render('Universities/Create', ['university'=>$universities]);
    }
    
    public function show($id){
        $universities= University::with("careers")->whereId($id)->first();
        return Inertia::render('Universities/Show',['universities'=>$universities]);
    }

    public function update(Request $request,  $id)
    {
        try{
            $validatedData = $request->validate([
                'name'=> 'required|string|max:75',
                'phone'=> 'nullable|string|max:15',
                'address'=> 'nullable|string|max:75',
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
            $universities = University::findOrFail($id);
            $universities->delete();
            return redirect()->route( "universities.index")->with('success','Registro eliminado correctamente'); 

        } catch (\Exception $e) {
            return  redirect()->back()
                ->withInput()->withErrors(['msg'=>'error al eliminar universidad']);
        }
    }
}
