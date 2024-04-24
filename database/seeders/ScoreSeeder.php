<?php

namespace Database\Seeders;

use App\Models\Score;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $score1 = new Score;
        $score1->reaction = 'Bueno';
        $score1->project_id = 1;
        $score1->save();

        $score2 = new Score;
        $score2->reaction = 'Indiferente';
        $score2->project_id = 2;
        $score2->save();
    }
}
