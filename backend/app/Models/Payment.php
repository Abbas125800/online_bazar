<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $primaryKey = 'paymentId';

    protected $fillable = ['orderId', 'amount', 'method', 'status', 'transactionRef'];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderId');
    }
}
