<?php

namespace App\Http\Controllers;

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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Persons/Form', ['id' => 0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|min:3|max:35',
            'last_name' => 'required|min:3|max:35',
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $person = new Person();
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->save();

        $imageName = $this->loadImage($request);

        if ($imageName !== '') {
            $person->image()->create(['url' => 'img/users/' . $imageName]);
        }

        return redirect()->route('persons.index')->with('success', 'Los datos de persona se han creado correctamente');
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
        $person = Person::find($id);

        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->filled('first_name')) {
            $person->first_name = $request->first_name;
        }
        if ($request->filled('last_name')) {
            $person->last_name = $request->last_name;
        }

        if ($request->hasFile('image')) {
            $imageName = $this->loadImage($request);
            if ($imageName !== '') {
                if ($person->image) {
                    Storage::delete('public/' . $person->image->url);
                    $person->image()->delete();
                }
                $person->image()->create(['url' => 'img/users/' . $imageName]); // Guarda la ruta relativa de la nueva imagen
            }
        }

        $person->save();

        return redirect()->route('persons.index')->with('success', 'Los datos de la persona se han actualizado correctamente');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $person = Person::find($id);
        $person->delete();
    }

    /**
     * Este método se encarga de subir una imagen en el directorio "storage/app/public/img/users"
     * @return return retorna el nombre de la imagen.
     */
    public function loadImage($request)
    {
        $image_name = '';
        if ($request->hasFile('image')) {
            $destination_path = public_path('img/users');
            $image = $request->file('image');
            $image_name = time() . '_' . $image->getClientOriginalName();
            $image->move($destination_path, $image_name);
        }
        return $image_name;
    }
}
