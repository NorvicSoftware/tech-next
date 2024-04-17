<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Career;

class CareerController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        // Mostrar todas las carreras
        $career = Career::all();
        return response()->json($career);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $career = new Career();
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            $career->save();
            return response()->json(['status' => true, 'message' => 'La carrera' . $request->career['name'] . 'fue creada exitosamente']);
        }catch (\Exception $exc){
            return response()->json(['status' => false, 'message' => 'Error al crear la carrera' .$exc]);
        }
    }

    /**
     * Display the specified resource.

     */
    public function show(string $id)
    {
        $career = Career::with(['university'])->where('id', '=', $id)->get();
        return response()->json($career);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $career = Career::findOrFail($id);
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            $career->save();
            return response()->json(['status' => true, 'message' => 'La carrera' .  $career->career['name'] . 'fue actualizada exitosamente']);
        }catch (\Exception $exc){
            return response()->json(['status' => false, 'message' => 'Error al editar la carrera']);
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
            
            return response()->json(['status' => true, 'message' => 'La carrera' .   $career->career['name'] . 'fue eliminada exitosamente']);
        }catch (\Exception $exc){
            return response()->json(['status' => false, 'message' => 'Error al eliminar la carrera']);
        }
    }
}
