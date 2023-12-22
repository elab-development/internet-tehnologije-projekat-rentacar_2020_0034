<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RentalAgentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SearchController;


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

//login i registracija
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);




//USERS
Route::get('users', [UserController::class, 'index']);

Route::get('users/{id}', [UserController::class, 'show']); 


//CARS
Route::get('cars', [CarController::class, 'index']);

Route::get('cars/{id}', [CarController::class, 'show']); 

//pretraga auta po imenu
Route::get('/search/cars', [SearchController::class, 'searchCars']);


//TRANSACTIONS
Route::get('transactions', [TransactionController::class, 'index']);

Route::get('transactions/{id}', [TransactionController::class, 'show']); 


//METODE ZA KOJE NAM TREBA LOGIN
Route::group(['middleware' => ['auth:sanctum']], function () {

    //TRANSACTIONS
    Route::patch('transactions/alterTheStatus/{id}', [TransactionController::class, 'updateStatus']);

    Route::post('transactions', [TransactionController::class, 'store']);
    
    Route::put('transactions/{id}', [TransactionController::class, 'update']); 
    
    Route::delete('transactions/{id}', [TransactionController::class, 'destroy']); 

    //RENTALAGENTS
    Route::resource('rentalagents', RentalAgentController::class);


    //CARS
    Route::post('cars', [CarController::class, 'store']);

    Route::put('cars/{id}', [CarController::class, 'update']); 

    Route::delete('cars/{id}', [CarController::class, 'destroy']); 

  


    Route::post('logout', [AuthController::class, 'logout']);

});

