<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyect extends Model
{
    use HasFactory;
    protected $fillable = [
        'title_project',
        'average',
        'year',
        'tutor',
        'user_id',
        'person_id'
    ];
    //public $timestamps = false;
}
