<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Factory::create();
        return [

            'title_project' => $faker->word(),
            'average' => $faker->randomNumber(1),
            'year' => $faker->year,
            'tutor' => $faker->firstName,
            'user_id' => 1, 
            'person_id' => 1, 
        ];
    }
}