<?php

namespace Database\Factories;

use App\Models\Career;
use App\Models\Person;
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

            'title' => $this->faker->sentence(),
            'qualification' => $this->faker->numberBetween(0, 100),
            'year' => $this->faker->numberBetween(2010, 2024),
            'manager' => $this->faker->name(),
            'person_id' => Person::all()->random()->id, 
            'career_id' => Career::all()->random()->id, 
        ];
    }
}
