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
            'cover_photo' => 'https://example.com/great-gatsby.jpg',
            'genre_id' => 1,
            'author_id' => 1,
        ],
        [
            'title' => 'To Kill a Mockingbird',
            'description' => 'A novel about racial injustice in the Deep South',
            'price' => 120000,
            'stock' => 5,
            'cover_photo' => 'https://example.com/to-kill-a-mockingbird.jpg',
            'genre_id' => 2,
            'author_id' => 2,
        ],
        [
            'title' => '1984',
            'description' => 'A dystopian novel about totalitarianism',
            'price' => 150000,
            'stock' => 8,
            'cover_photo' => 'https://example.com/1984.jpg',
            'genre_id' => 3,
            'author_id' => 3,
        ]
    ];

    public function getBooks() {
        return $this->books;
    }
}
