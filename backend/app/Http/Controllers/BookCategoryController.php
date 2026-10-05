<?php

namespace App\Http\Controllers;

use App\Models\BookCategory;
use Illuminate\Http\Request;

class BookCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $categories = BookCategory::all();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json("Impossible de récupérer les catégories de livres");
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $category = new BookCategory([
                "category_id" => $request->input("category_id"),
                "description" => $request->input("description"),
                "name" => $request->input("name"),
                "image" => $request->input("image"),
            ]);
            $category->save();
            return response()->json($category, 200);
        } catch (\Exception $e) {
            return response()->json("Ajout impossible");
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $category = BookCategory::findOrFail($id);
            return response()->json($category, 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $category = BookCategory::findOrFail($id);
            $category->update($request->all());
            return response()->json($category);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $category = BookCategory::findOrFail($id);
            $category->delete();
            return response()->json("Catégorie de livre supprimée avec succès", 200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }
}
