<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use HasFactory;

    protected $primaryKey = 'planId';

    protected $fillable = ['name', 'price', 'durationMonths', 'features'];

    public function sellerSubscriptions()
    {
        return $this->hasMany(SellerSubscription::class, 'planId');
    }
}
