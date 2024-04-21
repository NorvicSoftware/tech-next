<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Score extends Model
{
    use HasFactory;
    protected $table = 'scores';

    protected $fillable = ['reaction', 'project_id'];

    public function project (): BelongsTo {
        return $this->belongsTo(Project::class);
    }


}
