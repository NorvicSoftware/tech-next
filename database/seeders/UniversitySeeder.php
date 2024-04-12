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
        $university1->name = "UCATEC";
        $university1->phone = "63919683";
        $university1->address = "Cala Cala";
        $university1->save();

        $university2 = new University;
        $university2->name = "UNIVALLE";
        $university2->phone = "77788878";
        $university2->address = "América";
        $university2->save();

        $university3 = new University;
        $university3->name = "UNIFRANZ";
        $university3->phone = "74787546";
        $university3->address = "América entre Santa Cruz";
        $university3->save();

        $university4 = new University;
        $university4->name = "San Simon";
        $university4->phone = "75414521";
        $university4->address = "Quintanilla";
        $university4->save();

        $university5 = new University;
        $university5->name = "UNO";
        $university5->phone = "65251545";
        $university5->address = "Av. Blanco Galindo";
        $university5->save();
    }
}
