<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $table = 'Cars';

    protected $fillable = [
        'name',
        'description',
        'image',
        'price',
        'rentTimeInDays',
        'VIN',
        'fuelType',
        'gearType',
        'properties',
        'registration',
        
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function carType()
    {
        return $this->belongsTo(CarType::class);
    }
}
