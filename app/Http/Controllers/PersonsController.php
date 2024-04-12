<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PersonsController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        return view('persons.index', compact('persons'));
    }

    public function create()
    {
        return view('persons.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'ci' => 'required|string|max:7',
            'first_name' => 'required|string|max:20',
            'last_name' => 'nullable|string|max:20',
        ]);

        Person::create($request->all());

        return redirect()->route('persons.index')->with('success', 'Successfully created Person');
    }

    public function edit($id)
    {
        $person = Person::findOrFail($id);
        return view('persons.edit', compact('person'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'ci' => 'required|string|max:7',
            'first_name' => 'required|string|max:20',
            'last_name' => 'nullable|string|max:20',
        ]);

        $person = Person::findOrFail($id);
        $person->update($request->all());

        return redirect()->route('persons.index')->with('success', 'Successfully updated Person');
    }

    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return redirect()->route('persons.index')->with('success', 'Successfully eliminated Person');
    }
}
