<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'Transactions';

    protected $fillable = [
        'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function rentalAgent()
    {
        return $this->belongsTo(RentalAgent::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
