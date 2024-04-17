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
        $person1->first_name = "Cristiano";
        $person1->last_name = "Ronaldo";
        $person1->save();

        $person2 = new Person;
        $person2->first_name = "Franz";
        $person2->last_name = "Kaka";
        $person2->save();

        $person3 = new Person;
        $person3->first_name = "Ronal";
        $person3->last_name = "Araujo";
        $person3->save();

        $person4 = new Person;
        $person4->first_name = "Neymar";
        $person4->last_name = "Junior";
        $person4->save();

        $person5 = new Person;
        $person5->first_name = "Maria";
        $person5->last_name = "Messi";
        $person5->save();
    }
}
