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
            'qualification' => $this->faker->randomElement(['Bueno','Muy Bueno', 'Excelente']),
            'year' => $this->faker->randomNumber(4),
            'manager' => $this->faker->firstName,
            'person_id' => $this->faker->randomElement([1, 2, 3, 4, 5]), 
            'career_id' => $this->faker->randomElement([1, 2, 3, 4, 5]), 
        ];
    }
}
