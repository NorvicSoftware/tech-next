<?php

namespace Database\Seeders;

use App\Models\Career;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $career1 = new Career;
        $career1->name = "Ing. Sistemas";
        $career1->phone = "63919663";
        $career1->university_id = 1;
        $career1->save();

        $career2 = new Career;
        $career2->name = "Comunicación";
        $career2->university_id = 1;
        $career2->save();

        $career3 = new Career;
        $career3->name = "Ing. Comercial";
        $career3->phone = "63919663";
        $career3->university_id = 1;
        $career3->save();

        $career4 = new Career;
        $career4->name = "Marketing";
        $career4->phone = "63919663";
        $career4->university_id = 1;
        $career4->save();

        $career5 = new Career;
        $career5->name = "Diseño Gráfico";
        $career5->phone = "74787112";
        $career5->university_id = 1;
        $career5->save();

        $career6 = new Career;
        $career6->name = "Adm. Empresas";
        $career6->phone = "74787112";
        $career6->university_id = 1;
        $career6->save();

        $career7 = new Career;
        $career7->name = "Mecatrónica";
        $career7->phone = "74787112";
        $career7->university_id = 1;
        $career7->save();

        $career8 = new Career;
        $career8->name = "Turismo";
        $career8->phone = "74787112";
        $career8->university_id = 1;
        $career8->save();
    }
}
