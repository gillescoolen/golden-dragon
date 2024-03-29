<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login')->name('login');
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('logout', 'AuthController@logout');

    Route::get('users', 'UserController@all');
    Route::get('user/role', 'UserController@role');
    Route::post('user/{id}', 'UserController@update');
});

Route::get('news', 'NewsController@all');

Route::get('dishes', 'DishController@all');
Route::get('dishes/extras', 'DishController@extras');
Route::get('dishes/{id}', 'DishController@single');

Route::get('orders', 'OrderController@all');
Route::get('orders/{id}', 'OrderController@single');
Route::post('orders', 'OrderController@create');
Route::post('orders/history', 'OrderController@history');

Route::get('categories', 'CategoryController@allWithDishes');
