<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    use HasFactory;

    protected $primaryKey = 'likeId';

    protected $fillable = [
        'postId',
        'customerId'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }
}
