<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = 'customerId';

    protected $fillable = [
        'firstName',
        'lastName',
        'phone',
        'email',
        'identityNumber',
        'customerPassword',
        'location'
    ];

    protected $hidden = ['customerPassword'];

    public function likes()
    {
        return $this->hasMany(Likes::class, 'customerId');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'customerId');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class, 'customerId');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'customerId');
    }

    public function messages()
    {
        return $this->hasMany(UserCustomerMessage::class, 'customerId');
    }

    public function ratings()
    {
        return $this->hasMany(Rating::class, 'customerId');
    }

    public function cart()
    {
        return $this->hasOne(Cart::class, 'customerId');
    }

    public function postViews()
    {
        return $this->hasMany(PostView::class, 'customerId');
    }
}
