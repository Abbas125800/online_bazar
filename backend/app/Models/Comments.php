<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $primaryKey = 'commentId';

    protected $fillable = ['postId', 'customerId', 'content'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class, 'commentId');
    }

    public function likes()
    {
        return $this->hasMany(CommentLike::class, 'commentId');
    }
}
