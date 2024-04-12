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
      //Person::factory()->count(5)->create();
    
        $person1 = new Person;
        $person1->ci = "123123";
        $person1->name = "Cristiano";
        $person1->first_name = "Barrios";
        $person1->last_name = "Flores";
        $person1->save();
    }
}
