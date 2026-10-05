<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()//Indexes affichage des sous-catégories
    {
        try {
            $subCategories = SubCategory::with("category")->get();
            return response()->json($subCategories);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $subCategory = new SubCategory([
                "name" => $request->input("name"),
                "image" => $request->input("image"),
                "category_id" => $request->input("category_id"),
                "descriptionSCat" => $request->input("descriptionSCat"),
                "subcategory_id" => $request->input("subcategory_id"),
            ]);
            $subCategory->save();
            return response()->json($subCategory);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $subCategory = SubCategory::with("category")->findOrFail($id);
            return response()->json($subCategory);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $subCategory = SubCategory::findOrFail($id);
            $subCategory->update($request->all());
            return response()->json($subCategory);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $subCategory = SubCategory::findOrFail($id);
            $subCategory->delete();
            return response()->json("Sous-catégorie supprimée avec succès");
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
