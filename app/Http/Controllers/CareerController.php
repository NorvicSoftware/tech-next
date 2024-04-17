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
        $validated = $request->validate([
            'name' => 'required|max:50',
            'phone' => 'max:10',
            'university.id' => 'required|integer|exists:universities,id'
        ]);
        DB::beginTransaction(); //Iniciar transacciones
        try {
            $career = new Career();
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            $career->save();
            DB::commit(); //Aplica los cambios realizados a la BD
            return response()->json(['status' => true, 'message' => 'La carrera' . $request->career['name'] . 'fue creada exitosamente']);
        }catch (\Exception $exc){
            DB::rollback(); // Evita que se apliquen cambios parciales a l BD
            return response()->json(['status' => false, 'message' => 'Error al crear la carrera' .$exc]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
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
        $validated = $request->validate([
            'name' => 'required|max:50',
            'phone' => 'max:10',
            'university.id' => 'required|integer|exists:universities,id'
        ]);
        try {
            $career = Career::findOrFail($id);
            $career->name = $request->name;
            $career->phone = $request->phone;
            $career->university_id = $request->university['id'];
            $career->save();
            DB::commit(); //Aplica los cambios realizados a la BD
            return response()->json(['status' => true, 'message' => 'La carrera' . $request->career['name'] . 'fue actualizada exitosamente']);
        }catch (\Exception $exc){
            DB::rollback(); // Evita que se apliquen cambios parciales a l BD
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
            DB::commit(); //Aplica los cambios realizados a la BD
            return response()->json(['status' => true, 'message' => 'La carrera' . $request->career['name'] . 'fue eliminada exitosamente']);
        }catch (\Exception $exc){
            DB::rollback(); // Evita que se apliquen cambios parciales a l BD
            return response()->json(['status' => false, 'message' => 'Error al eliminar la carrera']);
        }
    }
}
