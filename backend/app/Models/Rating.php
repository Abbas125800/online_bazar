<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    protected $primaryKey = 'ratingId';

    protected $fillable = ['postId', 'customerId', 'rating', 'review'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }
}
