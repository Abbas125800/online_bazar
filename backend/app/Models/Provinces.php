<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provinces extends Model
{
    use HasFactory;

    protected $primaryKey = 'provinceId';

    protected $fillable = [
        'name'
    ];

    public function districts()
    {
        return $this->hasMany(Distrects::class, 'provinceId');
    }
}
