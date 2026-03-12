<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostColor extends Model
{
    use HasFactory;

    protected $table = 'post_colors';

    protected $fillable = [
        'postId',
        'colorId',
        'quantityColor'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function color()
    {
        return $this->belongsTo(Color::class, 'colorId');
    }
}
