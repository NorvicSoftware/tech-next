<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonsController;
use App\Http\Controllers\ProjectController;
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

    //Score Controller
    Route::get('/scores', [ScoreController::class, 'index'])->name('scores.index');
    Route::get('/scores/create', [ScoreController::class, 'create'])->name('scores.create');
    Route::post('/scores', [ScoreController::class, 'store'])->name('scores.store');
    Route::get('/scores/{id}/edit', [ScoreController::class, 'edit'])->name('scores.edit');
    Route::put('/scores/{id}', [ScoreController::class, 'update'])->name('scores.update');
    Route::delete('/scores/{id}', [ScoreController::class, 'destroy'])->name('scores.destroy');

    //Projects Controller
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{id}', [ProjectController::class, 'show'])->name('projects.show');
    Route::get('/projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');

});

//Excel
Route::get('/import', [ImportController::class, 'showImportForm'])->name('import.form');
Route::post('/import/projects', [ImportController::class, 'importProjects'])->name('import.projects');
Route::post('/import/persons', [ImportController::class, 'importPersons'])->name('import.persons');

require __DIR__.'/auth.php';