<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostSize extends Model
{
    use HasFactory;

    protected $table = 'post_sizes';

    protected $fillable = [
        'postId',
        'sizeId',
        'stock'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function size()
    {
        return $this->belongsTo(Size::class, 'sizeId');
    }
}
