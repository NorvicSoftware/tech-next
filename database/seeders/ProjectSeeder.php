<?php

namespace Database\Seeders;

use App\Models\Image;
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
        $project1 = new Project;
        $project1->title = "Desarrollo de un sistema de gestión de inventario para una empresa de logística";
        $project1->qualification = 85;
        $project1->year = "2022";
        $project1->manager = "Luis Pérez";
        $project1->person_id = 1;
        $project1->career_id = 1;
        $project1->save();
        $image1 = new Image();
        $image1->url = 'images/projects/project1.jpg';
        $image1->imageable()->associate($project1);
        $image1->save();

        $project2 = new Project;
        $project2->title = "Producción de un cortometraje documental sobre la cultura local";
        $project2->qualification = 82;
        $project2->year = "2023";
        $project2->manager = "Laura Gómez";
        $project2->person_id = 2;
        $project2->career_id = 2;
        $project2->save();
        $image2 = new Image();
        $image2->url = 'images/projects/project2.jpg';
        $image2->imageable()->associate($project2);
        $image2->save();

        $project3 = new Project;
        $project3->title = "Análisis de mercado para la introducción de un nuevo producto tecnológico";
        $project3->qualification = 85;
        $project3->year = "2023";
        $project3->manager = "Eduardo Fernández";
        $project3->person_id = 3;
        $project3->career_id = 3;
        $project3->save();
        $image3 = new Image();
        $image3->url = 'images/projects/project3.jpg';
        $image3->imageable()->associate($project3);
        $image3->save();

        $project4 = new Project;
        $project4->title = "Desarrollo de una estrategia de marketing digital para una empresa de turismo";
        $project4->qualification = 85;
        $project4->year = "2023";
        $project4->manager = "María Fernández";
        $project4->person_id = 4;
        $project4->career_id = 4;

        $project5 = new Project;
        $project5->title = "Evaluación de la efectividad de una estrategia de marketing de contenidos";
        $project5->qualification = 87;
        $project5->year = "2024";
        $project5->manager = "Ana Pérez";
        $project5->person_id = 5;
        $project5->career_id = 4;

        $project6 = new Project;
        $project6->title = "Diseño de identidad visual para una marca de moda";
        $project6->qualification = 85;
        $project6->year = "2023";
        $project6->manager = "Andrea Martínez";
        $project6->person_id = 3;
        $project6->career_id = 5;
        $project6->save();

        $project7 = new Project;
        $project7->title = "Elaboración de un plan de negocios para una startup tecnológica";
        $project7->qualification = 85;
        $project7->year = "2023";
        $project7->manager = "Carlos Fernández";
        $project7->person_id = 1;
        $project7->career_id = 6;
        $project7->save();

        $project8 = new Project;
        $project8->title = "Diseño y construcción de un robot móvil autónomo para aplicaciones industriales";
        $project8->qualification = 85;
        $project8->year = "2023";
        $project8->manager = "Juan Martínez";
        $project8->person_id = 3;
        $project8->career_id = 7;
        $project8->save();
    }
}
