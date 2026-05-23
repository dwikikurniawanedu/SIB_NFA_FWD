<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function index() 
    {
        $genres = Genre::all();

        if ($genres->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "No resources found",
                "data" => []
            ], 404);
        };

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $genres
        ], 200);
    }

    public function store(Request $request) {
        // 1. validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        // 2. check validator error
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors(),
                "data" => []
            ], 422);
        }

        // 3. insert data
        $genre = Genre::create([
            'name' => $request->name,
            'description' => $request->description
        ]);

        // 4. response
        return response()->json([
            "success" => true,
            "message" => "Resource is successfully created",
            "data" => $genre
        ], 201);
    }

    public function show(string $id) {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json([
                "success" => false,
                "message" => "Resource not found",
                "data" => []
            ], 404);
        }
        
        return response()->json([
            "success" => true,
            "message" => "Get resource",
            "data" => $genre
        ], 200);
    }

    public function destroy(string $id) {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json([
                "success" => false,
                "message" => "Resource not found",
                "data" => []
            ], 404);
        }

        $genre->delete();
        return response()->json([
            "success" => true,
            "message" => "Resource is successfully deleted",
            "data" => []
        ], 200);
    }
}
