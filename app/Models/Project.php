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

    protected $fillable = [
        'title',
        'qualification',
        'year',
        'manager',
        'person_id',
        'career_id',
    ];

    public function scores(): HasMany {
        return $this->hasMany(Score::class);
    }

    public function person(): BelongsTo {
        return $this->belongsTo(Person::class);
    }

    public function career(): BelongsTo {
        return $this->belongsTo(Career::class);
    }

    public function image() {
        return $this->morphOne(Image::class, 'imageable');
    }
}