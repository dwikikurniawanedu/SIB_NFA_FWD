<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('user', 'book')->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                "success" => false,
                "message" => "No resources found",
                "data" => []
            ], 404);
        };
       
        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $transactions
        ], 200);
    }

    public function store(Request $request)
    {
        // 1. Validator & Check Validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1',
        ]);
        if ($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => "Validation error",
                "data" => $validator->errors()
            ], 422);
        }

        // 2. Generate orderNumber -> unique | ORD-0003
        $uniqueCode = 'ORD-' . strtoupper(uniqid());

        // 3. Ambil user yang sedang login & cek login (apakah ada data user?)
        $user = auth('api')->user();
        if (!$user) {
            return response()->json([
                "success" => false,
                "message" => "User not found",
                "data" => []
            ], 404);
        }

        // 4. Mencari data buku daari request
        $book = Book::find($request->book_id);

        // 5. Cek stok buku
        if ($book->stock < $request->quantity) {
            return response()->json([
                "success" => false,
                "message" => "Stock not enough",
                "data" => []
            ], 400);
        }

        // 6. hitung total harga = price * quantity
        $totalAmount = $book->price * $request->quantity;

        // 7. Kurangi stok buku (update stok buku)
        $book->stock -= $request->quantity;
        $book->save();

        // 8. Simpan data transaksi
        $transaction = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount
        ]);

        return response()->json([
            "success" => true,
            "message" => "Resource created",
            "data" => $transaction
        ], 201);
    }
}
