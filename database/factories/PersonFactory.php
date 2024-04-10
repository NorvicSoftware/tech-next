<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ci' => $this->faker->randomNumber(7),
            'name' => $this->faker->firstName,
            'paternal_surname' => $this->faker->lastName,
            'maternal_surname' => $this->faker->lastName,
        ];
        
    }
}