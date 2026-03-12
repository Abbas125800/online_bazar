<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostView extends Model
{
    use HasFactory;

    protected $primaryKey = 'viewId';

    protected $fillable = ['postId', 'userId', 'customerId'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'postId');
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
