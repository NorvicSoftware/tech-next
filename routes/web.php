<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonsController;
use App\Http\Controllers\ScoreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ImportController; // Exel


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Persons Controller

    Route::get('/persons', [PersonsController::class, 'index'])->name('persons.index');
    Route::get('/persons/create', [PersonsController::class, 'create'])->name('persons.create');
    Route::post('/persons', [PersonsController::class, 'store'])->name('persons.store');
    Route::get('/persons/{id}/edit', [PersonsController::class, 'edit'])->name('persons.edit');
    Route::put('/persons/{id}', [PersonsController::class, 'update'])->name('persons.update');
    Route::delete('/persons/{id}', [PersonsController::class, 'destroy'])->name('persons.destroy');



    // Define rutas para ScoreController
    Route::prefix('scores')->group(function() {
        // Ruta para listar todas las puntuaciones
        Route::get('/', [ScoreController::class, 'index'])->name('scores.index');
    
        // Ruta para mostrar el formulario de creación de una nueva puntuación
        Route::get('/create', [ScoreController::class, 'create'])->name('scores.create');
    
        // Ruta para almacenar una nueva puntuación
        Route::post('/', [ScoreController::class, 'store'])->name('scores.store');
    
        // Ruta para almacenar múltiples puntuaciones
        Route::post('/multiple', [ScoreController::class, 'storeMultiple'])->name('scores.storeMultiple');
    
        // Ruta para mostrar una puntuación específica por ID
        Route::get('/{id}', [ScoreController::class, 'show'])->name('scores.show');
    
        // Ruta para mostrar el formulario de edición de una puntuación específica
        Route::get('/{id}/edit', [ScoreController::class, 'edit'])->name('scores.edit');
    
        // Ruta para actualizar una puntuación específica
        Route::put('/{id}', [ScoreController::class, 'update'])->name('scores.update');
    
        // Ruta para eliminar una puntuación específica
        Route::delete('/{id}', [ScoreController::class, 'destroy'])->name('scores.destroy');
    });
    




});

//Excel
Route::get('/import', [ImportController::class, 'showImportForm'])->name('import.form');
Route::post('/import/projects', [ImportController::class, 'importProjects'])->name('import.projects');
Route::post('/import/persons', [ImportController::class, 'importPersons'])->name('import.persons');

require __DIR__.'/auth.php';
