<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $primaryKey = 'orderId';

    protected $fillable = ['customerId', 'status', 'totalPrice', 'paymentMethod'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerId');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class, 'orderId');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'orderId');
    }

    public function delivery()
    {
        return $this->hasOne(Delivery::class, 'orderId');
    }
}
