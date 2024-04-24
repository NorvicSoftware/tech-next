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
        $university1->name = "Universidad UCATEC";
        $university1->phone = "4200406";
        $university1->address = "Cochabamaba";
        $university1->save();

        $university2 = new University;
        $university2->name = "Universidad Mayor de San Simón";
        $university2->phone = "77654321";
        $university2->address = "Cochabamba";
        $university2->save();

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
    }
}
