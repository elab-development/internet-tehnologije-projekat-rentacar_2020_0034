<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('users', [UserController::class, 'index']);

Route::get('users/{id}', [UserController::class, 'show']); 

Route::get('cars', [CarController::class, 'index']);

Route::get('cars/{id}', [CarController::class, 'show']); 
