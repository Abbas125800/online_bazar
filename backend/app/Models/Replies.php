<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $primaryKey = 'replyId';

    protected $fillable = ['commentId', 'userId', 'customerId', 'content'];

    public function comment()
    {
        return $this->belongsTo(Comment::class, 'commentId');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }
}
