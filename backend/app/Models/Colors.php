<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $primaryKey = 'colorID';

    protected $fillable = ['color'];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_colors', 'colorId', 'postId')->withPivot('quantityColor');
    }
}
