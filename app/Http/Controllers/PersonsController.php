<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;
use Inertia\Inertia;

class PersonsController extends Controller
{

    public function index()
    {
        $persons = Person::with('image')->get();
        return Inertia::render('Persons/Index', ['persons' => $persons]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Persons/Form', ['id'=> 0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|min:3|max:35',
            'last_name' => 'required|min:3|max:35',
            ]);

        $person = new Person();
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->save();

        return redirect()->route('persons.index')->with('succes', 'Los datos de persona se han creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $person = Person::find($id);
        return Inertia::render('Persons/Form', ['person' => $person, 'id' => $id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_name' => 'required|min:3|max:35',
            'last_name' => 'required|min:3|max:35',
            ]);

        $person = Person::find($id);
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->save();

        return redirect()->route('persons.index')->with('succes', 'Los datos de persona se han creado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $person = Person::find($id);
        $person->delete();
    }

}
