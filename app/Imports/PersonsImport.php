<?php

namespace App\Imports;

use App\Models\Person;
use Maatwebsite\Excel\Concerns\ToModel;

class PersonsImport implements ToModel
{
    public function model(array $row)
    {
        return new Person([
            'first_name' => $row[0],
            'last_name' => $row[1],
        ]);
    }
}