<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PersonsController extends Controller
{
    public function index()
    {
        $persons = Person::with('image')->get();
        return Inertia::render('Persons/Index', ['persons' => $persons]);
    }

    public function create()
    {
        return Inertia::render('Persons/Create');
    }

    /* public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:75',
            'last_name' => 'required|string|max:75',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        Person::create($validatedData);

        return redirect()->route('persons.index')->with('success', 'Person created successfully');
    } */

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:75',
            'last_name' => 'required|string|max:75',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $person = Person::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        /* $image = $request->file('image');
        $imagePath = $image->store('images', 'public');

        $imageName = $person->id . '_' . time() . '.' . $image->getClientOriginalExtension();
        Storage::disk('public')->move($imagePath, 'images/' . $imageName); */

        
        $imageName = $this->loadImage($request);

        if($imageName !== '') {
            $person->image()->create(['url' => 'images/users/' . $imageName]);
        }

        return redirect()->route('persons.index')->with('succes', 'Persona agregada exitosamente');
    }

    public function edit(string $id)
    {
        $person = Person::findOrFail($id);
        return Inertia::render('Persons/Edit', ['person' => $person]);
    }

    /* public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:75',
            'last_name' => 'required|string|max:75',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $person = Person::findOrFail($id);
        $person->update(['first_name' => $request->first_name, 'last_name' => $request->last_name]);

        return redirect()->route('persons.index')->with('success', 'Person updated successfully');
    } */

    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $person = Person::findOrFail($id);

        // Actualizar los campos first_name y last_name
        $person->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        // Si se proporciona una nueva imagen, actualizarla
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('images', 'public');

            // Eliminar la imagen anterior si existe
            if ($person->image) {
                Storage::disk('public')->delete('images/' . $person->image->url);
            }

            // Renombrar la imagen con el ID de la persona para evitar conflictos de nombre
            $imageName = $person->id . '_' . time() . '.' . $image->getClientOriginalExtension();
            Storage::disk('public')->move($imagePath, 'images/' . $imageName);

            // Actualizar la URL de la imagen en la base de datos
            $person->image()->update([
                'url' => 'storage/images/' . $imageName,
            ]);
        }

        return redirect()->route('persons.index')->with('success', 'Persona actualizada exitosamente.');
    }

    /* public function update(Request $request, $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:75',
            'last_name' => 'required|string|max:75',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $person = Person::findOrFail($id);

        $person->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('images', 'public');

            if($person->image) {
                Storage::disk('public')->delete('images/' . $person->image->url);
            }

            $imageName = $person->id . '_' . time() . '.' . $image->getClientOriginalExtension();
            Storage::disk('public')->move($imagePath, 'images/' . $imageName);

            $person->image()->update(['url' => $imageName,]);
        }

        return redirect()->route('persons.index')->with('success', 'Persona actualizada exitosamente');
    } */

    public function destroy(string $id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return redirect()->route('persons.index')->with('success', 'Person deleted successfully');
    }

    public function show($id)
    {
        /* $person = Person::findOrFail($id);
        $image = $person->image()->url;

        return Inertia::render('Persons/Show', ['person' => $person, 'image' => $image]); */
    }
    public function loadImage($request){
        $image_name = '';
        if($request->hasFile('image')) {
            $destination_path = 'public/images/users';
            $image = $request->file('image');
            $image_name = time() . '_' . $image->getClientOriginalName();
            $request->file('image')->storeAs($destination_path, $image_name);
        }
        return $image_name;
    }
}
