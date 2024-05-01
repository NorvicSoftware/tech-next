<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonsController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\CareerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\User\UserCareerController;
use App\Http\Controllers\User\UserSearchController;
use App\Http\Controllers\User\UserShowController;
use App\Http\Controllers\UserController;
use App\Models\Career;

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
    $careers = Career::all();
    return "$careers";
}); */


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


    Route::get('/scores', [ScoreController::class, 'index'])->name('scores.index');

    //Projects Controller
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{id}', [ProjectController::class, 'show'])->name('projects.show');
    Route::get('/projects/{id}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    

    //University Controller
    Route::get('/universities', [UniversityController::class, 'index'])->name('universities.index');
    Route::get('/universities/create', [UniversityController::class, 'create'])->name('universities.create');
    Route::post('/universities', [UniversityController::class, 'store'])->name('universities.store');
    Route::get('/universities/{id}/edit', [UniversityController::class, 'edit'])->name('universities.edit');
    Route::put('/universities/{id}', [UniversityController::class, 'update'])->name('universities.update');
    Route::delete('/universities/{id}', [UniversityController::class, 'destroy'])->name('universities.destroy');

    //Careeer Controller 
    Route::get('/careers', [CareerController::class, 'index'])->name('careers.index');
    Route::get('/careers/create', [CareerController::class, 'create'])->name('careers.create');
    Route::post('/careers', [CareerController::class, 'store'])->name('careers.store');
    Route::get('/careers/{id}', [CareerController::class, 'show'])->name('careers.show');
    Route::get('/careers/{id}/edit', [CareerController::class, 'edit'])->name('careers.edit');
    Route::put('/careers/{id}', [CareerController::class, 'update'])->name('careers.update');
    Route::delete('/careers/{id}', [CareerController::class, 'destroy'])->name('careers.destroy');

    //ImportController
    Route::get('/import', [ImportController::class, 'index'])->name('imports.index');
    Route::get('/import/excel', [ImportController::class, 'import'])->name('projects.import');
    //Route::get('/import/excel', [ImportController::class, 'importPersons'], [ImportController::class, 'import'])->name('projects.import');

    //Project Controller
    Route::get('/projects/generate-report', [ProjectController::class, 'generateReport'])->name('projects.generate-report');
});

//Vista de Usuario - Proyecto
Route::get('/show/{id}', [UserShowController::class, 'showProjectById'])->name('usershow.showProjectById');
Route::post('/show/{id}', [UserShowController::class, 'store'])->name('usershow.store');

//Vista de Usuario - Carreras
Route::get('/', [UserCareerController::class, 'getCareers']);
Route::get('/', [UserCareerController::class, 'getCareers'])->name('careers');

//Vista de Usuario - Buscar
Route::get('/projects/search/{careerId}', [UserSearchController::class, 'getProjectsByCareer'])->name('projects.getProjectsByCareer');
Route::post('/projects/search/{careerId}', [UserSearchController::class, 'searchProjectsByCareer'])->name('projects.searchProjectsByCareer');

Route::get('/carrera/{careerId}', [UserSearchController::class, 'getProjectsByCareer'])->name('projects.by.career');

Route::post('/projects/search', [UserSearchController::class, 'searchProjects'])->name('projects.search');

//Vista de Usuario - Proyecto
/* Route::get('/', function () {
    return Inertia::render('Users/Project');
})->name('project');
//Route::get('/', [UserCareerController::class, 'getCareers']);


Route::get('/list', [UserController::class, 'index'])->name('list.index');

Route::get('/careers', [UserController::class, 'showCareers'])->name('public.careers')->middleware('inertia');
Route::get('/careers/{career}/projects', [UserController::class, 'showProjectsByCareer'])->name('public.projects.by.career')->middleware('inertia'); */

require __DIR__.'/auth.php';