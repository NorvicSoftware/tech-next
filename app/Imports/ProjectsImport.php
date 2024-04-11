<?php

namespace App\Imports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\ToModel;

class ProjectsImport implements ToModel
{
    public function model(array $row)
    {
        return new Project([
            'title_project' => $row[0],
            'note' => $row[1],
            'year' => $row[2],
            'manager' => $row[3],
            'person_id' => $row[4],
        ]);
    }
}
