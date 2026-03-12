<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $primaryKey = 'orderItemId';

    protected $fillable = ['orderId', 'postId', 'quantity', 'price'];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderId');
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }
}
