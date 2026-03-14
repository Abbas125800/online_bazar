<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\LocationController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/admin-stats', [AdminController::class, 'stats']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/provinces', [LocationController::class, 'provinces']);
Route::get('/districts', [LocationController::class, 'districts']);
