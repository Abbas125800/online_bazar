<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


use Laravel\Sanctum\HasApiTokens;




class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $primaryKey = 'id'; // ستون اصلی
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'firstName',
        'lastName',
        'phone',
        'email',
        'userImage',
        'backgroundImage',
        'userPassword',
        'distrectId',
        'role',
        'verified'
    ];

    protected $hidden = ['userPassword'];

    public function getAuthPassword()
    {
        return $this->userPassword;
    }
    // روابط
    public function company()
    {
        return $this->hasOne(UserCompany::class, 'userId');
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'userId');
    }

    public function messages()
    {
        return $this->hasMany(UserCustomerMessage::class, 'userId');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class, 'userId');
    }

    public function subscriptions()
    {
        return $this->hasMany(SellerSubscription::class, 'userId');
    }

    public function postViews()
    {
        return $this->hasMany(PostView::class, 'userId');
    }
}
