<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the books.
     */
    public function index()
    {//Tous affiché
        try {
            $books = Book::with("subCategory")->get();//books datas
            return response()->json($books);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Store a newly created book in storage.
     */
    public function store(Request $request)
    {
        try {
            $book = new Book([
                "title" => $request->input("title"),
                "author" => $request->input("author"),
                "isbn" => $request->input("isbn"),
                "published_date" => $request->input("published_date"),
                "cover_image" => $request->input("cover_image"),
                "category_id" => $request->input("category_id"),
                "subcategory_id" => $request->input("subcategory_id"),
            ]);
            $book->save();
            return response()->json($book);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display the specified book.
     */
    public function show($id)
    {
        try {
            $book = Book::with("subCategory")->findOrFail($id);
            return response()->json($book);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Update the specified book in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $book = Book::findOrFail($id);
            $book->update([
                "title" => $request->input("title"),
                "author" => $request->input("author"),
                "isbn" => $request->input("isbn"),
                "published_date" => $request->input("published_date"),
                "cover_image" => $request->input("cover_image"),
                "category_id" => $request->input("category_id"),
                "subcategory_id" => $request->input("subcategory_id"),
            ]);
            return response()->json($book);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified book from storage.
     */
    public function destroy($id)
    {
        try {
            $book = Book::findOrFail($id);
            $book->delete();
            return response()->json(["message" => "Book deleted successfully."]);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }
}

