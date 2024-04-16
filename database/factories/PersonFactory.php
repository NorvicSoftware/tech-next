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
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
        ];
        
    }
}