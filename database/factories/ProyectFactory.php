<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyect>
 */
class ProyectFactory extends Factory
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
            'title_project' => $this->faker->word(),
            'average' => $this->faker->randomNumber(1),
            'year' => $this->faker->year,
            'tutor' => $this->faker->firstName,
            'user_id' => 1, // Reemplaza con el ID del usuario
            'person_id' => 1, // Reemplaza con el ID de la persona
        ];
    }
}
