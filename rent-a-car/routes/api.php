<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RentalAgentController;
use App\Http\Controllers\TransactionController;

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
//USERS
Route::get('users', [UserController::class, 'index']);

Route::get('users/{id}', [UserController::class, 'show']); 


//CARS
Route::get('cars', [CarController::class, 'index']);

Route::get('cars/{id}', [CarController::class, 'show']); 

Route::post('cars', [CarController::class, 'store']);

Route::put('cars/{id}', [CarController::class, 'update']); 

Route::delete('cars/{id}', [CarController::class, 'destroy']); 


//RENTALAGENTS
Route::resource('rentalagents', RentalAgentController::class);


//TRANSACTIONS
Route::get('transactions', [TransactionController::class, 'index']);

Route::get('transactions/{id}', [TransactionController::class, 'show']); 

Route::patch('transactions/alterTheStatus/{id}', [TransactionController::class, 'updateStatus']);

Route::post('transactions', [TransactionController::class, 'store']);

Route::put('transactions/{id}', [TransactionController::class, 'update']); 

Route::delete('transactions/{id}', [TransactionController::class, 'destroy']); 
