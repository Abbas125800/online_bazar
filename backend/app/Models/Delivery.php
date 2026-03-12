<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    protected $primaryKey = 'deliveryId';

    protected $fillable = ['orderId', 'address', 'districtId', 'status', 'deliveryDate'];

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderId');
    }

    public function district()
    {
        return $this->belongsTo(Distrects::class, 'districtId');
    }
}
