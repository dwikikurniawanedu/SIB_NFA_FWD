<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    private $genres = [
        [
            'id' => 1,
            'name' => 'Fiction',
        ],
        [
            'id' => 2,
            'name' => 'Non-Fiction',
        ],
        [
            'id' => 3,
            'name' => 'Science Fiction',
        ]
    ];

    public function getGenres() {
        return $this->genres;
    }
}
