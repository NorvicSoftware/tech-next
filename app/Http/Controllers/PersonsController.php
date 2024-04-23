<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PersonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
        $persons = Person::all();
        return Inertia::render('Persons/Form', ["Persons"=>$persons, 'id'=>0]);
    }

    /**
     * Store a newly created resource in storage.
     */
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

    
        $imageName = $this->loadImage($request);

        if($imageName !== '') {
            $person->image()->create(['url' => 'images/users/' . $imageName]);
        }

        return redirect()->route('persons.index')->with('succes', 'Persona agregada exitosamente');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $person = Person::findOrFail($id);
        return Inertia::render('Persons/Edit', ['person' => $person]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $person = Person::findOrFail($id);
        $image = $person->image()->url;

        return Inertia::render('Persons/Show', ['person' => $person, 'image' => $image]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $person = Person::findOrFail($id);

        $person->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('images', 'public');

            if ($person->image) {
                Storage::disk('public')->delete('images/' . $person->image->url);
            }

            $imageName = $person->id . '_' . time() . '.' . $image->getClientOriginalExtension();
            Storage::disk('public')->move($imagePath, 'images/' . $imageName);

            $person->image()->update([
                'url' => 'storage/images/' . $imageName,
            ]);
        }

        return redirect()->route('persons.index')->with('success', 'Persona actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return redirect()->route('persons.index')->with('success', 'Person deleted successfully');
    }

    /**
     * Este método se encarga de subir una imagen en el directorio "storage/app/public/images/users"
     * @return return retorna el nombre de la imagen.
     */
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
