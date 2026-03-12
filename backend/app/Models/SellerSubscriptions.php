<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerSubscription extends Model
{
    use HasFactory;

    protected $primaryKey = 'subscriptionId';

    protected $fillable = ['userId', 'planId', 'startDate', 'endDate', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function plan()
    {
        return $this->belongsTo(SubscriptionPlan::class, 'planId');
    }
}
