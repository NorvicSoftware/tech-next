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
        $score1->reaction = 1;
        $score1->project_id = 1;
        $score1->save();

        $score2 = new Score;
        $score2->reaction = 2;
        $score2->project_id = 2;
        $score2->save();

        $score3 = new Score;
        $score3->reaction = 3;
        $score3->project_id = 3;
        $score3->save();

        $score4 = new Score;
        $score4->reaction = 1;
        $score4->project_id = 4;
        $score4->save();

        $score5 = new Score;
        $score5->reaction = 2;
        $score5->project_id = 5;
        $score5->save();
    }
}
