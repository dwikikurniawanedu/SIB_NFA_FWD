<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => 'The Great Gatsby',
            'description' => 'A classic novel by F. Scott Fitzgerald',
            'price' => 100000,
            'stock' => 10,
            'cover_photo' => 'https://example.com/great-gatsby.jpg',
            'genre_id' => 1,
            'author_id' => 1,
        ]);

        Book::create([
            'title' => 'To Kill a Mockingbird',
            'description' => 'A novel by Harper Lee about racial injustice',
            'price' => 120000,
            'stock' => 5,
            'cover_photo' => 'https://example.com/to-kill-a-mockingbird.jpg',
            'genre_id' => 1,
            'author_id' => 2,
        ]);

        Book::create([
            'title' => '1984',
            'description' => 'A dystopian novel by George Orwell',
            'price' => 150000,
            'stock' => 8,
            'cover_photo' => 'https://example.com/1984.jpg',
            'genre_id' => 2,
            'author_id' => 3,
        ]);
    }
}
