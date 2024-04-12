<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $table = "projects";

    public function scores(): HasMany {
        return $this->hasMany(Score::class);
    }

    public function person(): BelongsTo {
        return $this->belongsTo(Person::class);
    }

    public function career(): BelongsTo {
        return $this->belongsTo(Career::class);
    }

    protected $fillable = [
        'title_project',
        'note',
        'year',
        'manager',
        'person_id',
        'career_id',
    ];
}