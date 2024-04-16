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
        $career1->name = "Marketing";
        $career1->phone = "63919663";
        $career1->university_id = 1;
        $career1->save();

        $career2 = new Career;
        $career2->name = "Mecánica";
        $career2->university_id = 2;
        $career2->save();

        $career3 = new Career;
        $career3->name = "Turismo";
        $career3->phone = "63919663";
        $career3->university_id = 3;
        $career3->save();

        $career4 = new Career;
        $career4->name = "Administración";
        $career4->phone = "63919663";
        $career4->university_id = 4;
        $career4->save();
    }
}
