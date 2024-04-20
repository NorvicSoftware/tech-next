<?php

namespace Database\Seeders;

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

        $person6 = new Person;
        $person6->first_name = "Cristian";
        $person6->last_name = "Barrios";
        $person6->save();

        $person7 = new Person;
        $person7->first_name = "Americo";
        $person7->last_name = "Alvarez";
        $person7->save();

        $person8 = new Person;
        $person8->first_name = "Sara";
        $person8->last_name = "Zurita";
        $person8->save();

        $person9 = new Person;
        $person9->first_name = "Angel";
        $person9->last_name = "Tibubay";
        $person9->save();

        $person10 = new Person;
        $person10->first_name = "Diland";
        $person10->last_name = "Castellon";
        $person10->save();

        $person11 = new Person;
        $person11->first_name = "Victor";
        $person11->last_name = "Seleme";
        $person11->save();

        $person12 = new Person;
        $person12->first_name = "Maide";
        $person12->last_name = "Mamani";
        $person12->save();

        $person13 = new Person;
        $person13->first_name = "Marisol";
        $person13->last_name = "Herrera";
        $person13->save();

        $person14 = new Person;
        $person14->first_name = "Adrian";
        $person14->last_name = "Gomez";
        $person14->save();

        $person15 = new Person;
        $person15->first_name = "Jhojan";
        $person15->last_name = "Coro";
        $person15->save();
    }
}
