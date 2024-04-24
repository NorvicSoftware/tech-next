<?php

namespace App\Imports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\ToModel;

class ProjectsImport implements ToModel
{
    public function model(array $row)
    {
        return new Project([
            'title' => $row[0],
            'qualification' => $row[1],
            'year' => $row[2],
            'manager' => $row[3],
            'person_id' => $row[4],
            'career_id' => $row[5],
        ]);
    }
}