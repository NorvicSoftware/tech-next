<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::create([
            'title_project' => 'Nombre del proyecto',
            'note' => 0, // Asigna el valor que desees para 'note'
            'year' => 2024, // Asigna el año que desees
            'manager' => 'Nombre del gerente',
            'person_id' => 1, // ID de la persona relacionada con el proyecto
        ]);
    }
}
