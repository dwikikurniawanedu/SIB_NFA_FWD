<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    private $books = [
        [
            'title' => 'The Great Gatsby',
            'description' => 'A classic American novel set in the Jazz Age',
            'price' => 100000,
            'stock' => 10,
        ],

        [
            'title' => 'To Kill a Mockingbird',
            'description' => 'A novel about racial injustice in the Deep South',
            'price' => 120000,
            'stock' => 5,
        ],

        [
            'title' => '1984',
            'description' => 'A dystopian novel about totalitarianism',
            'price' => 150000,
            'stock' => 8,
        ],
    ];

    public function getBooks() {
        return $this->books;
    }
}
