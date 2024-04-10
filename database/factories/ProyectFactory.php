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
        $faker = Factory::create();
        return [

            'title_project' => $faker->word(),
            'average' => $faker->randomNumber(1),
            'year' => $faker->year,
            'tutor' => $faker->firstName,
            'user_id' => 1, // Reemplaza con el ID del usuario
            'person_id' => 1, // Reemplaza con el ID de la persona
        ];
    }
}
