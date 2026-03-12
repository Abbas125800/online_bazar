<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $primaryKey = 'postId';

    protected $fillable = ['title', 'categoryId', 'userId', 'description', 'price', 'discount', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function category()
    {
        return $this->belongsTo(Categories::class, 'categoryId');
    }

    public function colors()
    {
        return $this->belongsToMany(Color::class, 'post_colors', 'postId', 'colorId')->withPivot('quantityColor');
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'post_sizes', 'postId', 'sizeId')->withPivot('stock');
    }

    public function images()
    {
        return $this->hasMany(PostImages::class, 'postId');
    }

    public function likes()
    {
        return $this->hasMany(Likes::class, 'postId');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'postId');
    }

    public function views()
    {
        return $this->hasMany(PostView::class, 'postId');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'postId');
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class, 'postId');
    }
}
