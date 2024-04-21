<?php

namespace Database\Seeders;

use App\Models\Career;
use App\Models\Person;
use App\Models\Project;
use App\Models\Score;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(PersonSeeder::class);
        $this->call(UniversitySeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(ScoreSeeder::class);

        Career::factory(10)->create();
        Person::factory(10)->create();
        Project::factory(10)->create();
        University::factory(10)->create();
        Score::factory(10)->create();

    }
}
