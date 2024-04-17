<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
        return [

            'title_project' => $this->faker->word(),
            'qualification' => $this->faker->numberBetween(0, 100),
            'year' => $this->faker->numberBetween(2010, 2024),
            'manager' => $this->faker->firstName,
            'person_id' => Person::all()->random()->id, 
            'career_id' => Career::all()->random()->id, 
        ];
    }
}
