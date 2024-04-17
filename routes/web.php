<?php

use App\Http\Controllers\ProfileController;
<<<<<<< HEAD
=======
use App\Http\Controllers\PersonsController;
use App\Http\Controllers\ScoreController;
>>>>>>> 04fdab185d88cf7a6fe2ff80be574155bd413b79
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
<<<<<<< HEAD
=======

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



>>>>>>> 04fdab185d88cf7a6fe2ff80be574155bd413b79
});

require __DIR__.'/auth.php';
