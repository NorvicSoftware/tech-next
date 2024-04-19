<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\University;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Career>
 */
class CareerFactory extends Factory
{

    public function definition(): array
    {
        return [

            'name' => $this->faker->jobTitle(),
            'phone' => $this->faker->numberBetween(65000000, 75000000),
            'university_id' => University::all()->random()->id,
        ];
    }
}
