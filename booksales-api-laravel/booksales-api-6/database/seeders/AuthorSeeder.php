<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'J.K. Rowling'
        ]);

        Author::create([
            'name' => 'George R.R. Martin'
        ]);

        Author::create([
            'name' => 'J.R.R. Tolkien'
        ]); 
    }
}
