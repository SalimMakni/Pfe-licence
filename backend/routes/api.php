<?php

use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\SubCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
/*Routes génériques*/
//API
Route::middleware('api')->group(function () {
    Route::resource('BookCategory', BookCategoryController::class);
    });
Route::middleware('api')->group(function () {
    Route::resource('SubCategory', SubCategoryController::class);
    });
    Route::middleware('api')->group(function () {
        Route::resource('articles', BookCategoryController::class);
        });
/*Routes des API spécifiques */
/*Route::get('/listarticles/{idscat}',[ArticleController::class,"showArticlesBySCAT"]);
Route::get('/articles/art/articlespaginate', [ArticleController::class, 'articlesPaginate']);*/
