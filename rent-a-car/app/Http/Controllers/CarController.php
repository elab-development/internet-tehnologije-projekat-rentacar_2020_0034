<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Car;
use App\Http\Resources\CarResource;


use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    public function index()
    {
        $cars = Car::all();
        return CarResource::collection($cars);
    }

    //vrati auto po idu
    public function show($id)
    {
        $cars = Car::findOrFail($id);
        return new CarResource($cars);
    }
    
}
