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
       Project::factory()->count(10)->create();
        /*$project = new \App\Models\Project;;
    
        $project->title_project = 'sistemas';
        $project->note = 3;
        $project->year = "2024";
        $project->manager = "Nombre del tutor";
        $project->person_id = 1; 

 
        $project->save();*/
    }
}
