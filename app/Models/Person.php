<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Person extends Model
{
    use HasFactory;

    protected $table = "persons";

    protected $fillable = [
        'first_name',
        'last_name',
    ];

    public function projects(): HasMany {
        return $this->hasMany(Project::class);
    }
    
    public function image() {
        return $this->morphOne(Image::class, 'imageable');
    }

    
}