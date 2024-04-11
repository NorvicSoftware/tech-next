<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyect>
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
       
        return [

            'title_project' => $this->faker->word(),
            'note' => $this->faker->randomNumber(1),
            'year' => $this->faker->year,
            'manager' => $this->faker->firstName,
            'person_id' => 1, 
        ];
    }
}
