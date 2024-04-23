<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Career;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $careers = Career::all(); // Obtener todos los usuarios
        return Inertia::render('Users/Index', ['careers' => $careers]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $careers = Career::where('name', 'LIKE', "%{$query}%")
                     ->orWhere('email', 'LIKE', "%{$query}%")
                     ->get();

        return Inertia::render('Users/Index', ['careers' => $careers]);
    }

    
}

