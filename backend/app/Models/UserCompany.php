<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCompany extends Model
{
    use HasFactory;

    protected $primaryKey = 'sellerCompanyId';

    protected $fillable = ['userId', 'name', 'distrectId', 'location', 'logo', 'description'];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function district()
    {
        return $this->belongsTo(Distrects::class, 'distrectId');
    }
}
