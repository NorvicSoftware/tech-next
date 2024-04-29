<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class University extends Model
{
    use HasFactory;
    protected $table = 'universities';

    protected $fillable = [
        'name', 'phone', 'address'
    ];

    public function careers(): HasMany{
        return $this->hasMany(Career::class);
    }
    
}
