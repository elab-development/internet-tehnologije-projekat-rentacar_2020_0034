<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarType extends Model
{
    use HasFactory;


    protected $table = 'CarTypes';

    protected $fillable = [
        'name',
        'description',
    ];
}
