<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\ThemeAssignController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/domain/{member_id}', [ThemeAssignController::class, 'lodeIndex']);


