<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Person;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $person1 = new Person;
        $person1->first_name = "Cristian";
        $person1->last_name = "Barrios";
        $person1->save();
        $image1 = new Image();
        $image1->url = 'images/users/barrios.jpg';
        $image1->imageable()->associate($person1);
        $image1->save();

        $person2 = new Person;
        $person2->first_name = "Americo";
        $person2->last_name = "Alvarez";
        $person2->save();

        $person3 = new Person;
        $person3->first_name = "Sara";
        $person3->last_name = "Zurita";
        $person3->save();

        $person4 = new Person;
        $person4->first_name = "Angel";
        $person4->last_name = "Tibubay";
        $person4->save();
        
        $person5 = new Person;
        $person5->first_name = "Diland";
        $person5->last_name = "Castellon";
        $person5->save();
    }
}
