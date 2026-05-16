<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();

        if ($authors->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "No resources found",
                "data" => []
            ], 404);
        };

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $authors
        ], 200);
    }

    public function store(Request $request) {
        // 1. validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
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
        $author = Author::create([
            'name' => $request->name
        ]);

        // 4. response
        return response()->json([
            "success" => true,
            "message" => "Resource is successfully created",
            "data" => $author
        ], 201);
    }
}