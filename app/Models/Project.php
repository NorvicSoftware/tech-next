<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'title_project',
        'note',
        'year',
        'manager',
        'person_id'
    ];
    //public $timestamps = false;
}