<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    protected $primaryKey = 'sizeId';

    protected $fillable = ['size'];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_sizes', 'sizeId', 'postId')->withPivot('stock');
    }
}
