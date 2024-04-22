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
        $image1->url = 'images/projects/project1.png';
        $image1->imageable()->associate($project1);
        $image1->save();

        $project2 = new Project;
        $project2->title = "Implementación de un sistema de gestión de recursos humanos en una empresa multinacional";
        $project2->qualification = 90;
        $project2->year = "2023";
        $project2->manager = "María González";
        $project2->person_id = 2;
        $project2->career_id = 1;
        $project2->save();
        $image2 = new Image();
        $image2->url = 'images/projects/project2.png';
        $image2->imageable()->associate($project2);
        $image2->save();

        /* $project3 = new Project;
        $project3->title = "Desarrollo de una aplicación móvil para la gestión de pedidos de un restaurante";
        $project3->qualification = 80;
        $project3->year = "2021";
        $project3->manager = "Pedro Rodríguez";
        $project3->person_id = 3;
        $project3->career_id = 1;
        $project3->save();
        $image3 = new Image();
        $image3->url = ' images/project3.png';
        $image3->imageable()->associate($project3);
        $image3->save();

        $project4 = new Project;
        $project4->title = "Creación de un sistema de monitoreo de calidad de aire para una ciudad";
        $project4->qualification = 95;
        $project4->year = "2020";
        $project4->manager = "Ana Martínez";
        $project4->person_id = 4;
        $project4->career_id = 1;
        $project4->save();
        $image4 = new Image();
        $image4->url = ' images/project4.png';
        $image4->imageable()->associate($project4);
        $image4->save();

        $project5 = new Project;
        $project5->title = "Desarrollo de un sistema de gestión de incidencias para una empresa de servicios";
        $project5->qualification = 88;
        $project5->year = "2024";
        $project5->manager = "Juan López";
        $project5->person_id = 5;
        $project5->career_id = 1;
        $project5->save();
        $image5 = new Image();
        $image5->url = ' images/project5.png';
        $image5->imageable()->associate($project5);
        $image5->save();

        $project6 = new Project;
        $project6->title = "Producción de un cortometraje documental sobre la cultura local";
        $project6->qualification = 82;
        $project6->year = "2023";
        $project6->manager = "Laura Gómez";
        $project6->person_id = 6;
        $project6->career_id = 2;
        $project6->save();
        $image6 = new Image();
        $image6->url = ' images/project6.png';
        $image6->imageable()->associate($project6);
        $image6->save();

        $project7 = new Project;
        $project7->title = "Diseño y ejecución de una campaña publicitaria para una ONG";
        $project7->qualification = 88;
        $project7->year = "2022";
        $project7->manager = "Carlos Sánchez";
        $project7->person_id = 7;
        $project7->career_id = 2;
        $project7->save();
        $image7 = new Image();
        $image7->url = ' images/project7.png';
        $image7->imageable()->associate($project7);
        $image7->save();

        $project8 = new Project;
        $project8->title = "Elaboración de un plan de comunicación interna para una empresa de servicios";
        $project8->qualification = 85;
        $project8->year = "2021";
        $project8->manager = "Alejandra Ramírez";
        $project8->person_id = 8;
        $project8->career_id = 2;
        $project8->save();
        $image8 = new Image();
        $image8->url = ' images/project8.png';
        $image8->imageable()->associate($project8);
        $image8->save();

        $project9 = new Project;
        $project9->title = "Producción de un programa de radio sobre problemáticas sociales";
        $project9->qualification = 90;
        $project9->year = "2020";
        $project9->manager = "Miguel Torres";
        $project9->person_id = 9;
        $project9->career_id = 2;
        $project9->save();
        $image9 = new Image();
        $image9->url = ' images/project9.png';
        $image9->imageable()->associate($project9);
        $image9->save();

        $project10 = new Project;
        $project10->title = "Desarrollo de una estrategia de marketing digital para una empresa emergente";
        $project10->qualification = 87;
        $project10->year = "2024";
        $project10->manager = "Ana García";
        $project10->person_id = 10;
        $project10->career_id = 2;
        $project10->save();
        $image10 = new Image();
        $image10->url = ' images/project10.png';
        $image10->imageable()->associate($project10);
        $image10->save();

        $project11 = new Project;
        $project11->title = "Análisis de mercado para la introducción de un nuevo producto tecnológico";
        $project11->qualification = 85;
        $project11->year = "2023";
        $project11->manager = "Eduardo Fernández";
        $project11->person_id = 11;
        $project11->career_id = 3;
        $project11->save();
        $image11 = new Image();
        $image11->url = ' images/project11.png';
        $image11->imageable()->associate($project11);
        $image11->save();

        $project12 = new Project;
        $project12->title = "Desarrollo de un plan de negocios para una empresa de comercio electrónico";
        $project12->qualification = 90;
        $project12->year = "2022";
        $project12->manager = "Luisa Martínez";
        $project12->person_id = 12;
        $project12->career_id = 3;
        $project12->save();
        $image12 = new Image();
        $image12->url = ' images/project12.png';
        $image12->imageable()->associate($project12);
        $image12->save();

        $project13 = new Project;
        $project13->title = "Implementación de estrategias de marketing para aumentar las ventas en una empresa";
        $project13->qualification = 88;
        $project13->year = "2021";
        $project13->manager = "Fernando Gutiérrez";
        $project13->person_id = 13;
        $project13->career_id = 3;
        $project13->save();
        $image13 = new Image();
        $image13->url = ' images/project13.png';
        $image13->imageable()->associate($project13);
        $image13->save();

        $project14 = new Project;
        $project14->title = "Evaluación de la viabilidad financiera de un proyecto de inversión";
        $project14->qualification = 92;
        $project14->year = "2020";
        $project14->manager = "Carla Soto";
        $project14->person_id = 14;
        $project14->career_id = 3;
        $project14->save();
        $image14 = new Image();
        $image14->url = ' images/project14.png';
        $image14->imageable()->associate($project14);
        $image14->save();

        $project15 = new Project;
        $project15->title = "Desarrollo de una estrategia de branding para una startup";
        $project15->qualification = 87;
        $project15->year = "2024";
        $project15->manager = "Roberto Pérez";
        $project15->person_id = 15;
        $project15->career_id = 3;
        $project15->save();
        $image15 = new Image();
        $image15->url = ' images/project15.png';
        $image15->imageable()->associate($project15);
        $image15->save();

        $project16 = new Project;
        $project16->title = "Desarrollo de una estrategia de marketing digital para una empresa de turismo";
        $project16->qualification = 85;
        $project16->year = "2023";
        $project16->manager = "María Fernández";
        $project16->person_id = 16;
        $project16->career_id = 4;
        $project16->save();
        $image16 = new Image();
        $image16->url = ' images/project16.png';
        $image16->imageable()->associate($project16);
        $image16->save();

        $project17 = new Project;
        $project17->title = "Elaboración de un plan de marketing para el lanzamiento de un nuevo producto";
        $project17->qualification = 90;
        $project17->year = "2022";
        $project17->manager = "Alejandro Gómez";
        $project17->person_id = 17;
        $project17->career_id = 4;
        $project17->save();
        $image17 = new Image();
        $image17->url = ' images/project17.png';
        $image17->imageable()->associate($project17);
        $image17->save();

        $project18 = new Project;
        $project18->title = "Investigación de mercado para identificar oportunidades de negocio";
        $project18->qualification = 88;
        $project18->year = "2021";
        $project18->manager = "Laura Rodríguez";
        $project18->person_id = 18;
        $project18->career_id = 4;
        $project18->save();
        $image18 = new Image();
        $image18->url = ' images/project18.png';
        $image18->imageable()->associate($project18);
        $image18->save();

        $project19 = new Project;
        $project19->title = "Diseño de una campaña publicitaria para promocionar un evento cultural";
        $project19->qualification = 92;
        $project19->year = "2020";
        $project19->manager = "Carlos Soto";
        $project19->person_id = 19;
        $project19->career_id = 4;
        $project19->save();
        $image19 = new Image();
        $image19->url = ' images/project19.png';
        $image19->imageable()->associate($project19);
        $image19->save();

        $project20 = new Project;
        $project20->title = "Evaluación de la efectividad de una estrategia de marketing de contenidos";
        $project20->qualification = 87;
        $project20->year = "2024";
        $project20->manager = "Ana Pérez";
        $project20->person_id = 20;
        $project20->career_id = 4;
        $project20->save();
        $image20 = new Image();
        $image20->url = ' images/project20.png';
        $image20->imageable()->associate($project20);
        $image20->save();

        $project21 = new Project;
        $project21->title = "Diseño de identidad visual para una marca de moda";
        $project21->qualification = 85;
        $project21->year = "2023";
        $project21->manager = "Andrea Martínez";
        $project21->person_id = 1;
        $project21->career_id = 5;
        $project21->save();
        $image21 = new Image();
        $image21->url = ' images/project21.png';
        $image21->imageable()->associate($project21);
        $image21->save();

        $project22 = new Project;
        $project22->title = "Creación de una campaña publicitaria para una ONG";
        $project22->qualification = 90;
        $project22->year = "2022";
        $project22->manager = "Juan Pérez";
        $project22->person_id = 2;
        $project22->career_id = 5;
        $project22->save();
        $image22 = new Image();
        $image22->url = ' images/project22.png';
        $image22->imageable()->associate($project22);
        $image22->save();

        $project23 = new Project;
        $project23->title = "Diseño de packaging para productos gourmet";
        $project23->qualification = 88;
        $project23->year = "2021";
        $project23->manager = "María García";
        $project23->person_id = 3;
        $project23->career_id = 5;
        $project23->save();
        $image23 = new Image();
        $image23->url = ' images/project23.png';
        $image23->imageable()->associate($project23);
        $image23->save();

        $project24 = new Project;
        $project24->title = "Elaboración de material gráfico para una exposición de arte";
        $project24->qualification = 92;
        $project24->year = "2020";
        $project24->manager = "Pedro Ramírez";
        $project24->person_id = 4;
        $project24->career_id = 5;
        $project24->save();
        $image24 = new Image();
        $image24->url = ' images/project24.png';
        $image24->imageable()->associate($project24);
        $image24->save();

        $project25 = new Project;
        $project25->title = "Diseño de interfaz de usuario para una aplicación móvil de salud";
        $project25->qualification = 87;
        $project25->year = "2024";
        $project25->manager = "Ana González";
        $project25->person_id = 5;
        $project25->career_id = 5;
        $project25->save();
        $image25 = new Image();
        $image25->url = ' images/project25.png';
        $image25->imageable()->associate($project25);
        $image25->save();

        $project26 = new Project;
        $project26->title = "Elaboración de un plan de negocios para una startup tecnológica";
        $project26->qualification = 85;
        $project26->year = "2023";
        $project26->manager = "Carlos Fernández";
        $project26->person_id = 1;
        $project26->career_id = 6;
        $project26->save();
        $image26 = new Image();
        $image26->url = ' images/project26.png';
        $image26->imageable()->associate($project26);
        $image26->save();

        $project27 = new Project;
        $project27->title = "Implementación de estrategias de gestión de recursos humanos en una empresa";
        $project27->qualification = 90;
        $project27->year = "2022";
        $project27->manager = "Luisa Gómez";
        $project27->person_id = 2;
        $project27->career_id = 6;
        $project27->save();
        $image27 = new Image();
        $image27->url = ' images/project27.png';
        $image27->imageable()->associate($project27);
        $image27->save();

        $project28 = new Project;
        $project28->title = "Análisis financiero para la toma de decisiones en una empresa de servicios";
        $project28->qualification = 88;
        $project28->year = "2021";
        $project28->manager = "María Rodríguez";
        $project28->person_id = 3;
        $project28->career_id = 6;
        $project28->save();
        $image28 = new Image();
        $image28->url = ' images/project28.png';
        $image28->imageable()->associate($project28);
        $image28->save();

        $project29 = new Project;
        $project29->title = "Desarrollo de estrategias de marketing para aumentar la rentabilidad de una empresa";
        $project29->qualification = 92;
        $project29->year = "2020";
        $project29->manager = "Pedro Soto";
        $project29->person_id = 4;
        $project29->career_id = 6;
        $project29->save();
        $image29 = new Image();
        $image29->url = ' images/project29.png';
        $image29->imageable()->associate($project29);
        $image29->save();

        $project30 = new Project;
        $project30->title = "Implementación de un sistema de control de gestión en una empresa industrial";
        $project30->qualification = 87;
        $project30->year = "2024";
        $project30->manager = "Ana Pérez";
        $project30->person_id = 5;
        $project30->career_id = 6;
        $project30->save();
        $image30 = new Image();
        $image30->url = ' images/project30.png';
        $image30->imageable()->associate($project30);
        $image30->save();

        $project31 = new Project;
        $project31->title = "Diseño y construcción de un robot móvil autónomo para aplicaciones industriales";
        $project31->qualification = 85;
        $project31->year = "2023";
        $project31->manager = "Juan Martínez";
        $project31->person_id = 6;
        $project31->career_id = 7;
        $project31->save();
        $image31 = new Image();
        $image31->url = ' images/project31.png';
        $image31->imageable()->associate($project31);
        $image31->save();

        $project32 = new Project;
        $project32->title = "Implementación de un sistema de control para un brazo robótico industrial";
        $project32->qualification = 90;
        $project32->year = "2022";
        $project32->manager = "Luisa Gómez";
        $project32->person_id = 7;
        $project32->career_id = 7;
        $project32->save();
        $image32 = new Image();
        $image32->url = ' images/project32.png';
        $image32->imageable()->associate($project32);
        $image32->save();

        $project33 = new Project;
        $project33->title = "Diseño de un sistema de automatización para una planta de producción";
        $project33->qualification = 88;
        $project33->year = "2021";
        $project33->manager = "María Rodríguez";
        $project33->person_id = 8;
        $project33->career_id = 7;
        $project33->save();
        $image33 = new Image();
        $image33->url = ' images/project33.png';
        $image33->imageable()->associate($project33);
        $image33->save();

        $project34 = new Project;
        $project34->title = "Desarrollo de un prototipo de vehículo autónomo para aplicaciones logísticas";
        $project34->qualification = 92;
        $project34->year = "2020";
        $project34->manager = "Pedro Soto";
        $project34->person_id = 9;
        $project34->career_id = 7;
        $project34->save();
        $image34 = new Image();
        $image34->url = ' images/project34.png';
        $image34->imageable()->associate($project34);
        $image34->save();

        $project35 = new Project;
        $project35->title = "Diseño y desarrollo de un sistema de visión artificial para la inspección de productos";
        $project35->qualification = 87;
        $project35->year = "2024";
        $project35->manager = "Ana Pérez";
        $project35->person_id = 10;
        $project35->career_id = 7;
        $project35->save();
        $image35 = new Image();
        $image35->url = ' images/project35.png';
        $image35->imageable()->associate($project35);
        $image35->save();

        $project36 = new Project;
        $project36->title = "Desarrollo de un plan de turismo sostenible para una comunidad rural";
        $project36->qualification = 85;
        $project36->year = "2023";
        $project36->manager = "María López";
        $project36->person_id = 11;
        $project36->career_id = 8;
        $project36->save();
        $image36 = new Image();
        $image36->url = ' images/project36.png';
        $image36->imageable()->associate($project36);
        $image36->save();

        $project37 = new Project;
        $project37->title = "Diseño de una ruta turística para promover el ecoturismo en una región";
        $project37->qualification = 90;
        $project37->year = "2022";
        $project37->manager = "Juan Torres";
        $project37->person_id = 12;
        $project37->career_id = 8;
        $project37->save();
        $image37 = new Image();
        $image37->url = ' images/project37.png';
        $image37->imageable()->associate($project37);
        $image37->save();

        $project38 = new Project;
        $project38->title = "Creación de un plan de marketing turístico para un destino emergente";
        $project38->qualification = 88;
        $project38->year = "2021";
        $project38->manager = "Andrea Sánchez";
        $project38->person_id = 13;
        $project38->career_id = 8;
        $project38->save();
        $image38 = new Image();
        $image38->url = ' images/project38.png';
        $image38->imageable()->associate($project38);
        $image38->save();

        $project39 = new Project;
        $project39->title = "Desarrollo de un proyecto de agroturismo para una finca familiar";
        $project39->qualification = 92;
        $project39->year = "2020";
        $project39->manager = "Pedro Martínez";
        $project39->person_id = 14;
        $project39->career_id = 8;
        $project39->save();
        $image39 = new Image();
        $image39->url = ' images/project39.png';
        $image39->imageable()->associate($project39);
        $image39->save();

        $project40 = new Project;
        $project40->title = "Elaboración de un plan de gestión hotelera para un complejo turístico";
        $project40->qualification = 87;
        $project40->year = "2024";
        $project40->manager = "Ana García";
        $project40->person_id = 15;
        $project40->career_id = 8;
        $project40->save();
        $image40 = new Image();
        $image40->url = ' images/project40.png';
        $image40->imageable()->associate($project40);
        $image40->save(); */
    }
}
