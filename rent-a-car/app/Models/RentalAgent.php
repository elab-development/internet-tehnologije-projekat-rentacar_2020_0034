<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentalAgent extends Model
{
    use HasFactory;

    protected $table = 'RentalAgents';

    protected $fillable = [
        'name',
        'city',
        'address',
        'email',
        'telephone',

    ];

    public function transactions()
    {
        return $this->belongsToMany(Transaction::class);
    }
}
