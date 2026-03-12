<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandCompanies extends Model
{
    use HasFactory;

    protected $primaryKey = 'brandCompanyId';

    protected $fillable = [
        'name',
        'logo',
        'description'
    ];

    public function posts()
    {
        return $this->hasMany(Post::class, 'brandCompanyId');
    }
}
