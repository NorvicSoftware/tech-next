<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Career extends Model
{
    use HasFactory;

    protected $table = 'careers';

    public function university(): BelongsTo{
        return $this->belongsTo(University::class);
    }

    public function projects(): HasMany {
        return $this->hasMany(Project::class);
    }
    
    protected $fillable = [
        'name', 'phone', 'university_id'
    ];
}
