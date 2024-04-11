<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Career extends Model
{
    use HasFactory;

    protected $table = 'careers';
    public function university(): BelongsTo{
        return $this->belongsTo(University::class);
    }
    protected $fillable = [
        'name', 'phone', 'university_id'
    ];
}
