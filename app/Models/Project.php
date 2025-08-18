<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'stack',
        'image',
        'url',
    ];

    protected $casts = [
        'stack' => 'array', // otomatis ubah JSON ke array
    ];
}
