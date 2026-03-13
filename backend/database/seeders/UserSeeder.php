<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Provinces;
use App\Models\Distrects;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $province = Provinces::create([
            'provinceName' => 'کندز'
        ]);

        $district = Distrects::create([
            'districtName' => 'کندز',
            'provinceId' => 1
        ]);

        User::create([
            'firstName' => 'Admin',
            'lastName' => 'User',
            'phone' => '0700000000',
            'email' => 'admin@test.com',
            'userImage' => null,
            'backgroundImage' => null,
            'userPassword' => Hash::make('11111111'),
            'distrectId' => 1,
            'role' => 'admin',
            'verified' => 1
        ]);
    }
}
