<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projects extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_project',
        'note',
        'year',
        'manager',
        'person_id',
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
