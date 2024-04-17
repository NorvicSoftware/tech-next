<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;
use Inertia\Inertia;

class PersonsController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        return Inertia::render('Persons/Index', ['persons' => $persons]);
    }

    public function create()
    {
        return Inertia::render('Persons/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'ci' => 'required|string|max:7',
            'first_name' => 'required|string|max:20',
            'last_name' => 'nullable|string|max:20',
        ]);

        Person::create($validatedData);

        return redirect()->route('persons.index')->with('success', 'Person created successfully');
    }

    public function edit($id)
    {
        $person = Person::findOrFail($id);
        return Inertia::render('Persons/Edit', ['person' => $person]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'ci' => 'required|string|max:7',
            'first_name' => 'required|string|max:20',
            'last_name' => 'nullable|string|max:20',
        ]);

        $person = Person::findOrFail($id);
        $person->update($validatedData);

        return redirect()->route('persons.index')->with('success', 'Person updated successfully');
    }

    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return redirect()->route('persons.index')->with('success', 'Person deleted successfully');
    }

    public function show($id)
    {
        $person = Person::findOrFail($id);
        return Inertia::render('Persons/Show', ['person' => $person]);
    }
}
