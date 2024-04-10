<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';

    protected $fillable = ['title', 'year'];

    public function scores(): HasMany {
        return $this->hasMany(Score::class);
    }
    
}