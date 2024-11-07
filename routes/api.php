<?php

use App\Http\Controllers\ThemeAssignController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("assign-theme", [ThemeAssignController::class, 'assignTheme']);
