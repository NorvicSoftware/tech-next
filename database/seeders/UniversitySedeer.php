<?php

namespace Database\Seeders;

use App\Models\University;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UniversitySedeer extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $university = new University;

        $university->name="UCATEC";
        $university->phone="63919683";
        $university->address="Cala Cala";
        $university->save();
    }
}
