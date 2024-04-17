<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\University>
 */
class UniversityFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'phone' => $this->faker->numberBetween(65000000, 75000000),
            'address' => $this->faker->streetAddress(),
        ];
    }
}
