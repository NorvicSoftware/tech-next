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
        $project1 = new Project;
        $project1->title_project = "Desarrollo de sistema de ventas";
        $project1->qualification = 75;
        $project1->year = "2021";
        $project1->manager = "Saul Mogro";
        $project1->person_id = 1;
        $project1->career_id = 1;
        $project1->save();

        $project2 = new Project;
        $project2->title_project = "Desarrollo de sistema de pago";
        $project2->qualification = 100;
        $project2->year = "2022";
        $project2->manager = "Jose Motaño";
        $project2->person_id = 2;
        $project2->career_id = 2;
        $project2->save();

        $project3 = new Project;
        $project3->title_project = "Desarrollo de un chat para la universidad";
        $project3->qualification = 95;
        $project3->year = "2020";
        $project3->manager = "Edwin Aguirre Flores";
        $project3->person_id = 3;
        $project3->career_id = 3;
        $project3->save();

        $project4 = new Project;
        $project4->title_project = "Desarrollo de un sistema de facturación";
        $project4->qualification = 80;
        $project4->year = "2021";
        $project4->manager = "Satos Quispe Flores";
        $project4->person_id = 4;
        $project4->career_id = 4;
        $project4->save();

        $project5 = new Project;
        $project5->title_project = "Desarrollo de un sistema de ventas para el supermecado Reyes";
        $project5->qualification = 0;
        $project5->year = "2021";
        $project5->manager = "Jose Villalobos Montero";
        $project5->person_id = 5;
        $project5->career_id = 4;
        $project5->save();
    }
}
