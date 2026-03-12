<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $primaryKey = 'cartItemId';

    protected $fillable = [
        'cartId',
        'postId',
        'quantity'
    ];

    public function cart()
    {
        return $this->belongsTo(Cart::class, 'cartId');
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }
}
