<?php

namespace Database\Seeders;

use App\Models\Career;
use App\Models\University;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        //llamando seeder
        $this->call(UniversitySedeer::class);
        $this->call(CareerSeeder::class);


        //llamando FActory
        Career::factory(100)->create();
        University::factory(100)->create();
        // User::factory(10)->create();

        //User::factory()->create([
          //  'name' => 'Test User',
            //'email' => 'test@example.com',
        //]);
    }
}
