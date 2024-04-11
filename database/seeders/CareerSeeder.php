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
        //
        $career = new Career;
        $career->name=" Desarrollador Web";
        $career->phone="63919663";
        $career->university_id=1;
        $career->save();

    }
}
