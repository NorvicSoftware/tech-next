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
        $project1->title = "Desarrollar una campaña de marketing en redes sociales para un negocio local";
        $project1->qualification = 75;
        $project1->year = "2021";
        $project1->manager = "Saul Mogro";
        $project1->person_id = 1;
        $project1->career_id = 1;
        $project1->save();

        $project2 = new Project;
        $project2->title = "Diseñar y desarrollar un prototipo para un vehículo híbrido de bajo consumo";
        $project2->qualification = 100;
        $project2->year = "2022";
        $project2->manager = "Jose Motaño";
        $project2->person_id = 2;
        $project2->career_id = 2;
        $project2->save();

        $project3 = new Project;
        $project3->title = "Crear un plan de turismo sostenible para una comunidad local";
        $project3->qualification = 95;
        $project3->year = "2020";
        $project3->manager = "Edwin Aguirre Flores";
        $project3->person_id = 3;
        $project3->career_id = 3;
        $project3->save();

        $project4 = new Project;
        $project4->title = "Desarrollar un plan financiero para un nuevo emprendimiento";
        $project4->qualification = 80;
        $project4->year = "2021";
        $project4->manager = "Satos Quispe Flores";
        $project4->person_id = 4;
        $project4->career_id = 4;
        $project4->save();

        $project5 = new Project;
        $project5->title = "Diseñar e implementar un nuevo sistema de planificación de recursos empresariales (ERP)";
        $project5->qualification = 0;
        $project5->year = "2021";
        $project5->manager = "Jose Villalobos Montero";
        $project5->person_id = 5;
        $project5->career_id = 5;
        $project5->save();

        $project6 = new Project;
        $project6->title = "Crear un plan de marketing integral para el lanzamiento de un nuevo producto";
        $project6->qualification = 75;
        $project6->year = "2021";
        $project6->manager = "Saul Mogro";
        $project6->person_id = 6;
        $project6->career_id = 1;
        $project6->save();

        $project7 = new Project;
        $project7->title = "Investigar sistemas de propulsión alternativos para automóviles";
        $project7->qualification = 100;
        $project7->year = "2022";
        $project7->manager = "Jose Motaño";
        $project7->person_id = 7;
        $project7->career_id = 2;
        $project7->save();

        $project8 = new Project;
        $project8->title = "Desarrollar una estrategia de marketing para atraer turistas a un destino específico";
        $project8->qualification = 95;
        $project8->year = "2020";
        $project8->manager = "Edwin Aguirre Flores";
        $project8->person_id = 8;
        $project8->career_id = 3;
        $project8->save();

        $project9 = new Project;
        $project9->title = "Realizar una evaluación de riesgos para una posible oportunidad de inversión";
        $project9->qualification = 80;
        $project9->year = "2021";
        $project9->manager = "Satos Quispe Flores";
        $project9->person_id = 9;
        $project9->career_id = 4;
        $project9->save();

        $project10 = new Project;
        $project10->title = "Desarrollar un plan de ciberseguridad para proteger los datos de una empresa";
        $project10->qualification = 0;
        $project10->year = "2021";
        $project10->manager = "Jose Villalobos Montero";
        $project10->person_id = 10;
        $project10->career_id = 5;
        $project10->save();

        $project11 = new Project;
        $project11->title = "Realizar una investigación de mercado para identificar las tendencias y preferencias del consumidor";
        $project11->qualification = 75;
        $project11->year = "2021";
        $project11->manager = "Saul Mogro";
        $project11->person_id = 11;
        $project11->career_id = 1;
        $project11->save();

        $project12 = new Project;
        $project12->title = "Analizar los datos de rendimiento del vehículo para identificar áreas de mejora";
        $project12->qualification = 100;
        $project12->year = "2022";
        $project12->manager = "Jose Motaño";
        $project12->person_id = 12;
        $project12->career_id = 2;
        $project12->save();

        $project13 = new Project;
        $project13->title = "Diseñar e implementar un programa de capacitación en servicio al cliente para el personal de hostelería";
        $project13->qualification = 95;
        $project13->year = "2020";
        $project13->manager = "Edwin Aguirre Flores";
        $project13->person_id = 13;
        $project13->career_id = 3;
        $project13->save();

        $project14 = new Project;
        $project14->title = "Analizar datos de la empresa para identificar áreas de eficiencia operativa";
        $project14->qualification = 80;
        $project14->year = "2021";
        $project14->manager = "Satos Quispe Flores";
        $project14->person_id = 14;
        $project14->career_id = 4;
        $project14->save();

        $project15 = new Project;
        $project15->title = "Solucionar y diagnosticar problemas de conectividad de red";
        $project15->qualification = 0;
        $project15->year = "2021";
        $project15->manager = "Jose Villalobos Montero";
        $project15->person_id = 15;
        $project15->career_id = 5;
        $project15->save();
    }
}
