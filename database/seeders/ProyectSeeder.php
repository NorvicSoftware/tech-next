<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Proyect;

class ProyectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Proyect::factory()->count(10)->create();
        /*$proyect = new \App\Models\Proyect;;
    
        $proyect->title_project = 'sistemas';
        $proyect->average = 3;
        $proyect->year = "2024";
        $proyect->tutor = "Nombre del tutor";
        $proyect->user_id = 1; // Reemplaza con el ID del usuario
        $proyect->person_id = 1; // Reemplaza con el ID de la persona

        // Guardar el proyecto en la base de datos
        $proyect->save();*/
    }
}
