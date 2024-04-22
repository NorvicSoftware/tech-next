<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UniversitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $university1 = new University;
        $university1->name = "Universidad Mayor de San Andrés";
        $university1->phone = "76712345";
        $university1->address = "La Paz";
        $university1->save();

        $university2 = new University;
        $university2->name = "Universidad Mayor de San Simón";
        $university2->phone = "77654321";
        $university2->address = "Cochabamba";
        $university2->save();

        $university3 = new University;
        $university3->name = "Universidad Autónoma Gabriel René Moreno";
        $university3->phone = "75543210";
        $university3->address = "Santa Cruz de la Sierra";
        $university3->save();

        $university4 = new University;
        $university4->name = "Universidad Católica Boliviana 'San Pablo'";
        $university4->phone = "78901234";
        $university4->address = "La Paz, Cochabamba, Santa Cruz de la Sierra";
        $university4->save();

        $university5 = new University;
        $university5->name = "Universidad Privada de Bolivia";
        $university5->phone = "76890123";
        $university5->address = "La Paz, Cochabamba, Santa Cruz de la Sierra";
        $university5->save();

        $university6 = new University;
        $university6->name = "Universidad Técnica de Oruro";
        $university6->phone = "77777777";
        $university6->address = "Oruro";
        $university6->save();

        $university7 = new University;
        $university7->name = "Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca";
        $university7->phone = "75555555";
        $university7->address = "Sucre";
        $university7->save();

        $university8 = new University;
        $university8->name = "Universidad Privada del Valle";
        $university8->phone = "76666666";
        $university8->address = "Cochabamba";
        $university8->save();

        $university9 = new University;
        $university9->name = "Universidad Nacional Siglo XX";
        $university9->phone = "73333333";
        $university9->address = "Llallagua, Potosí";
        $university9->save();

        $university10 = new University;
        $university10->name = "Universidad Privada De Ciencias Administrativas y Tecnológicas";
        $university10->phone = "4200406";
        $university10->address = "Cochabamaba";
        $university10->save();
    }
}
