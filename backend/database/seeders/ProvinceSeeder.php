<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    public function run(): void
    {
        $provinces = [
            ['provinceName' => 'Badakhshan'],
            ['provinceName' => 'Badghis'],
            ['provinceName' => 'Baghlan'],
            ['provinceName' => 'Balkh'],
            ['provinceName' => 'Bamyan'],
            ['provinceName' => 'Daykundi'],
            ['provinceName' => 'Farah'],
            ['provinceName' => 'Faryab'],
            ['provinceName' => 'Ghazni'],
            ['provinceName' => 'Ghor'],
            ['provinceName' => 'Helmand'],
            ['provinceName' => 'Herat'],
            ['provinceName' => 'Jowzjan'],
            ['provinceName' => 'Kabul'],
            ['provinceName' => 'Kandahar'],
            ['provinceName' => 'Kapisa'],
            ['provinceName' => 'Khost'],
            ['provinceName' => 'Kunar'],
            ['provinceName' => 'Kunduz'],
            ['provinceName' => 'Laghman'],
            ['provinceName' => 'Logar'],
            ['provinceName' => 'Maidan Wardak'],
            ['provinceName' => 'Nangarhar'],
            ['provinceName' => 'Nimroz'],
            ['provinceName' => 'Nuristan'],
            ['provinceName' => 'Paktika'],
            ['provinceName' => 'Paktia'],
            ['provinceName' => 'Panjshir'],
            ['provinceName' => 'Parwan'],
            ['provinceName' => 'Samangan'],
            ['provinceName' => 'Sar-e Pul'],
            ['provinceName' => 'Takhar'],
            ['provinceName' => 'Urozgan'],
            ['provinceName' => 'Zabul'],
        ];

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('distrects')->truncate();
        DB::table('provinces')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        DB::table('provinces')->insert($provinces);
    }
}
