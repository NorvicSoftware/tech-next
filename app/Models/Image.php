<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = "images";

    public function imageable() {
        return $this->morphTo();
    }

    public function person() {
        return $this->hasOne(Person::class, 'imageable_id', 'id');
    }

    public function project() {
        return $this->hasOne(Project::class, 'imageable_id', 'id');
    }

    protected $fillable = [
        'url',
        'imageable_id',
        'imageable_type',
    ];
}
