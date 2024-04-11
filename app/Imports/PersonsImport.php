<?php

namespace App\Imports;

use App\Models\Person;
use Maatwebsite\Excel\Concerns\ToModel;

class PersonsImport implements ToModel
{
    public function model(array $row)
    {
        return new Person([
            'ci' => $row[0],
            'first_name' => $row[1],
            'last_name' => $row[2],
        ]);
    }
}
