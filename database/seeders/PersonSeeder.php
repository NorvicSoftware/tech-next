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
        $person1->ci = "123456";
        $person1->first_name = "Cristian";
        $person1->last_name = "Ronaldo";
        $person1->save();

        $person2 = new Person;
        $person2->ci = "123456";
        $person2->first_name = "Franz";
        $person2->last_name = "Kaka";
        $person2->save();

        $person3 = new Person;
        $person3->first_name = "Ronal";
        $person3->last_name = "Araujo";
        $person3->save();

        $person4 = new Person;
        $person4->ci = "123456";
        $person4->first_name = "Neymar";
        $person4->last_name = "Quispe";
        $person4->save();

        $person5 = new Person;
        $person5->ci = "123456";
        $person5->first_name = "Maria";
        $person5->last_name = "Messi";
        $person5->save();
    }
}
