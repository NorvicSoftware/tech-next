<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Career;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Career>
 */
class CareerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'name' => $this->faker->words(3, true),
            'phone' => $this->faker->unique()->regexify('[0-9]{1,10}'),
            'university_id' => $this->faker->randomElement([1, 2, 3, 4, 5]),

        ];
    }
}
