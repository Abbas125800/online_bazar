<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestController;

// Route::get('/test', [TestController::class, 'index']);


Route::get('/products', function () {
    return response()->json([
        "name" => "Laptop",
        "price" => 500
    ]);
});