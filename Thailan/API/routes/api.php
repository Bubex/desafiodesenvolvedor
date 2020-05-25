<?php

use Illuminate\Http\Request;
Use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

Route::get('users', 'UsersController@index');
Route::get('users/{id}', 'UsersController@getById');
Route::post('users', 'UsersController@store');
Route::put('users/{id}', 'UsersController@update');
Route::delete('users/{id}', 'UsersController@delete');