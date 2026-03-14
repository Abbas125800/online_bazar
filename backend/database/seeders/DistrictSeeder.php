<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DistrictSeeder extends Seeder
{
    /**
     * Seed districts from a local JSON file.
     * Place a file at database/seeders/data/districts.json with shape:
     * [{ "province": "Kabul", "district": "Bagrami" }, ...]
     */
    public function run(): void
    {
        $data = $this->districtList();

        // map province name -> id
        $provinces = DB::table('provinces')->pluck('id', 'provinceName');

        $rows = [];
        foreach ($data as $row) {
            $pname = $row['province'] ?? null;
            $pid   = $row['province_id'] ?? null;
            $dname = $row['district'] ?? null;
            $provinceId = $pid ?: ($pname && isset($provinces[$pname]) ? $provinces[$pname] : null);
            if (!$dname || !$provinceId) {
                Log::warning("DistrictSeeder: skipped district '{$dname}' because province missing/unknown.");
                continue;
            }
            $rows[] = [
                'districtName' => $dname,
                'provinceId'   => $provinceId,
            ];
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('distrects')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        DB::table('distrects')->insert($rows);
    }

    private function districtList(): array
    {
        // فهرست کامل ولسوالی‌ها بر اساس ولایت
        $list = [
            // Kabul
            ['province' => 'Kabul', 'district' => 'Bagrami'],
            ['province' => 'Kabul', 'district' => 'Chahar Asyab'],
            ['province' => 'Kabul', 'district' => 'Deh Sabz'],
            ['province' => 'Kabul', 'district' => 'Farza'],
            ['province' => 'Kabul', 'district' => 'Guldara'],
            ['province' => 'Kabul', 'district' => 'Istalif'],
            ['province' => 'Kabul', 'district' => 'Kabul City'],
            ['province' => 'Kabul', 'district' => 'Kalaki'],
            ['province' => 'Kabul', 'district' => 'Khak-e Jabbar'],
            ['province' => 'Kabul', 'district' => 'Mir Bacha Kot'],
            ['province' => 'Kabul', 'district' => 'Musayi'],
            ['province' => 'Kabul', 'district' => 'Paghman'],
            ['province' => 'Kabul', 'district' => 'Qarabagh'],
            ['province' => 'Kabul', 'district' => 'Surobi'],
            ['province' => 'Kabul', 'district' => 'Shakardara'],
            ['province' => 'Kabul', 'district' => 'Guldara'],
            // Kandahar
            ['province' => 'Kandahar', 'district' => 'Arghandab'],
            ['province' => 'Kandahar', 'district' => 'Arghestan'],
            ['province' => 'Kandahar', 'district' => 'Daman'],
            ['province' => 'Kandahar', 'district' => 'Ghorak'],
            ['province' => 'Kandahar', 'district' => 'Kandahar City'],
            ['province' => 'Kandahar', 'district' => 'Khuriyakhel (Shah Wali Kot)'],
            ['province' => 'Kandahar', 'district' => 'Maiwand'],
            ['province' => 'Kandahar', 'district' => 'Maruf'],
            ['province' => 'Kandahar', 'district' => 'Miyanshin'],
            ['province' => 'Kandahar', 'district' => 'Nesh'],
            ['province' => 'Kandahar', 'district' => 'Panjwayi'],
            ['province' => 'Kandahar', 'district' => 'Reg'],
            ['province' => 'Kandahar', 'district' => 'Shah Wali Kot'],
            ['province' => 'Kandahar', 'district' => 'Shorabak'],
            ['province' => 'Kandahar', 'district' => 'Spin Boldak'],
            ['province' => 'Kandahar', 'district' => 'Zhari'],
            // Nangarhar
            ['province' => 'Nangarhar', 'district' => 'Achin'],
            ['province' => 'Nangarhar', 'district' => 'Bati Kot'],
            ['province' => 'Nangarhar', 'district' => 'Behsud'],
            ['province' => 'Nangarhar', 'district' => 'Chaprahar'],
            ['province' => 'Nangarhar', 'district' => 'Dara-e Noor'],
            ['province' => 'Nangarhar', 'district' => 'Deh Bala'],
            ['province' => 'Nangarhar', 'district' => 'Dur Baba'],
            ['province' => 'Nangarhar', 'district' => 'Ghani Khel'],
            ['province' => 'Nangarhar', 'district' => 'Goshta'],
            ['province' => 'Nangarhar', 'district' => 'Hisarak'],
            ['province' => 'Nangarhar', 'district' => 'Jalalabad'],
            ['province' => 'Nangarhar', 'district' => 'Kama'],
            ['province' => 'Nangarhar', 'district' => 'Khogyani'],
            ['province' => 'Nangarhar', 'district' => 'Kot'],
            ['province' => 'Nangarhar', 'district' => 'Kuz Kunar'],
            ['province' => 'Nangarhar', 'district' => 'Lal Pur'],
            ['province' => 'Nangarhar', 'district' => 'Mohmand Dara'],
            ['province' => 'Nangarhar', 'district' => 'Nazyan'],
            ['province' => 'Nangarhar', 'district' => 'Pachir wa Agam'],
            ['province' => 'Nangarhar', 'district' => 'Rodat'],
            ['province' => 'Nangarhar', 'district' => 'Sherzad'],
            ['province' => 'Nangarhar', 'district' => 'Spinghar'],
            ['province' => 'Nangarhar', 'district' => 'Surkh Rod'],
            // Herat
            ['province' => 'Herat', 'district' => 'Adraskan'],
            ['province' => 'Herat', 'district' => 'Chishti Sharif'],
            ['province' => 'Herat', 'district' => 'Farsi'],
            ['province' => 'Herat', 'district' => 'Gulran'],
            ['province' => 'Herat', 'district' => 'Guzara'],
            ['province' => 'Herat', 'district' => 'Herat City'],
            ['province' => 'Herat', 'district' => 'Kohsan'],
            ['province' => 'Herat', 'district' => 'Kushk'],
            ['province' => 'Herat', 'district' => 'Kushk-e Kuhna'],
            ['province' => 'Herat', 'district' => 'Obe'],
            ['province' => 'Herat', 'district' => 'Pashtun Zarghun'],
            ['province' => 'Herat', 'district' => 'Shindand'],
            ['province' => 'Herat', 'district' => 'Zindajan'],
            // Balkh
            ['province' => 'Balkh', 'district' => 'Balkh'],
            ['province' => 'Balkh', 'district' => 'Chahar Bolak'],
            ['province' => 'Balkh', 'district' => 'Chahar Kent'],
            ['province' => 'Balkh', 'district' => 'Dawlatabad'],
            ['province' => 'Balkh', 'district' => 'Dehdadi'],
            ['province' => 'Balkh', 'district' => 'Kaldar'],
            ['province' => 'Balkh', 'district' => 'Kishindih'],
            ['province' => 'Balkh', 'district' => 'Kholm'],
            ['province' => 'Balkh', 'district' => 'Mazar-e Sharif'],
            ['province' => 'Balkh', 'district' => 'Nahr-e Shahi'],
            ['province' => 'Balkh', 'district' => 'Sholgara'],
            ['province' => 'Balkh', 'district' => 'Shortepa'],
            ['province' => 'Balkh', 'district' => 'Zari'],
            // Ghazni
            ['province' => 'Ghazni', 'district' => 'Ab Band'],
            ['province' => 'Ghazni', 'district' => 'Ajristan'],
            ['province' => 'Ghazni', 'district' => 'Andar'],
            ['province' => 'Ghazni', 'district' => 'Deh Yak'],
            ['province' => 'Ghazni', 'district' => 'Gelan'],
            ['province' => 'Ghazni', 'district' => 'Ghazni City'],
            ['province' => 'Ghazni', 'district' => 'Giro'],
            ['province' => 'Ghazni', 'district' => 'Jaghatu'],
            ['province' => 'Ghazni', 'district' => 'Jaghori'],
            ['province' => 'Ghazni', 'district' => 'Khogyani'],
            ['province' => 'Ghazni', 'district' => 'Malistan'],
            ['province' => 'Ghazni', 'district' => 'Muqur'],
            ['province' => 'Ghazni', 'district' => 'Nawa'],
            ['province' => 'Ghazni', 'district' => 'Nawa-e Ghazni'],
            ['province' => 'Ghazni', 'district' => 'Qarabagh'],
            ['province' => 'Ghazni', 'district' => 'Rashidan'],
            ['province' => 'Ghazni', 'district' => 'Waghaz'],
            ['province' => 'Ghazni', 'district' => 'Zanakhan'],
            // Kunduz
            ['province' => 'Kunduz', 'district' => 'Aliabad'],
            ['province' => 'Kunduz', 'district' => 'Chahar Dara'],
            ['province' => 'Kunduz', 'district' => 'Dasht-e Archi'],
            ['province' => 'Kunduz', 'district' => 'Imam Sahib'],
            ['province' => 'Kunduz', 'district' => 'Khan Abad'],
            ['province' => 'Kunduz', 'district' => 'Kunduz City'],
            ['province' => 'Kunduz', 'district' => 'Qala-e Zal'],
            // Parwan
            ['province' => 'Parwan', 'district' => 'Bagram'],
            ['province' => 'Parwan', 'district' => 'Charikar'],
            ['province' => 'Parwan', 'district' => 'Ghorband'],
            ['province' => 'Parwan', 'district' => 'Jabal Saraj'],
            ['province' => 'Parwan', 'district' => 'Kohi Safi'],
            ['province' => 'Parwan', 'district' => 'Salang'],
            ['province' => 'Parwan', 'district' => 'Sayd Khel'],
            ['province' => 'Parwan', 'district' => 'Shekh Ali'],
            ['province' => 'Parwan', 'district' => 'Surkhi Parsa'],
            // Bamyan
            ['province' => 'Bamyan', 'district' => 'Bamyan'],
            ['province' => 'Bamyan', 'district' => 'Kahmard'],
            ['province' => 'Bamyan', 'district' => 'Panjab'],
            ['province' => 'Bamyan', 'district' => 'Sayghan'],
            ['province' => 'Bamyan', 'district' => 'Shibar'],
            ['province' => 'Bamyan', 'district' => 'Waras'],
            // Daykundi
            ['province' => 'Daykundi', 'district' => 'Ashtarlay'],
            ['province' => 'Daykundi', 'district' => 'Gizab'],
            ['province' => 'Daykundi', 'district' => 'Ishtarlay'],
            ['province' => 'Daykundi', 'district' => 'Khadir'],
            ['province' => 'Daykundi', 'district' => 'Kiti'],
            ['province' => 'Daykundi', 'district' => 'Miramor'],
            ['province' => 'Daykundi', 'district' => 'Nili'],
            ['province' => 'Daykundi', 'district' => 'Sang-e Takht'],
            // Helmand
            ['province' => 'Helmand', 'district' => 'Baghran'],
            ['province' => 'Helmand', 'district' => 'Deshu'],
            ['province' => 'Helmand', 'district' => 'Dishu'],
            ['province' => 'Helmand', 'district' => 'Garmser'],
            ['province' => 'Helmand', 'district' => 'Gereshk (Nahr-e Saraj)'],
            ['province' => 'Helmand', 'district' => 'Kajaki'],
            ['province' => 'Helmand', 'district' => 'Khanashin'],
            ['province' => 'Helmand', 'district' => 'Lashkargah'],
            ['province' => 'Helmand', 'district' => 'Musa Qala'],
            ['province' => 'Helmand', 'district' => 'Nad Ali'],
            ['province' => 'Helmand', 'district' => 'Nawa-i-Barakzai'],
            ['province' => 'Helmand', 'district' => 'Now Zad'],
            ['province' => 'Helmand', 'district' => 'Reg'],
            ['province' => 'Helmand', 'district' => 'Sangin'],
            ['province' => 'Helmand', 'district' => 'Washir'],
            // Herat done above
            // Farah
            ['province' => 'Farah', 'district' => 'Anar Dara'],
            ['province' => 'Farah', 'district' => 'Bakwa'],
            ['province' => 'Farah', 'district' => 'Bala Buluk'],
            ['province' => 'Farah', 'district' => 'Farah City'],
            ['province' => 'Farah', 'district' => 'Gulistan'],
            ['province' => 'Farah', 'district' => 'Khaki Safed'],
            ['province' => 'Farah', 'district' => 'Lash wa Juwayn'],
            ['province' => 'Farah', 'district' => 'Pur Chaman'],
            ['province' => 'Farah', 'district' => 'Qala-e Kah'],
            ['province' => 'Farah', 'district' => 'Shib Koh'],
            // Badakhshan (subset)
            ['province' => 'Badakhshan', 'district' => 'Baharak'],
            ['province' => 'Badakhshan', 'district' => 'Darayim'],
            ['province' => 'Badakhshan', 'district' => 'Faizabad'],
            ['province' => 'Badakhshan', 'district' => 'Ishkashim'],
            ['province' => 'Badakhshan', 'district' => 'Jurm'],
            ['province' => 'Badakhshan', 'district' => 'Khash'],
            ['province' => 'Badakhshan', 'district' => 'Khwahan'],
            ['province' => 'Badakhshan', 'district' => 'Kishim'],
            ['province' => 'Badakhshan', 'district' => 'Kuran wa Munjan'],
            ['province' => 'Badakhshan', 'district' => 'Shighnan'],
            ['province' => 'Badakhshan', 'district' => 'Shuhada'],
            ['province' => 'Badakhshan', 'district' => 'Tishkan'],
            ['province' => 'Badakhshan', 'district' => 'Wakhan'],
            ['province' => 'Badakhshan', 'district' => 'Warduj'],
            ['province' => 'Badakhshan', 'district' => 'Yaftali Sufla'],
            ['province' => 'Badakhshan', 'district' => 'Yamgan'],
            ['province' => 'Badakhshan', 'district' => 'Zebak'],
            // Paktia (subset)
            ['province' => 'Paktia', 'district' => 'Ahmad Aba'],
            ['province' => 'Paktia', 'district' => 'Dand Wa Patan'],
            ['province' => 'Paktia', 'district' => 'Gardez'],
            ['province' => 'Paktia', 'district' => 'Jaji'],
            ['province' => 'Paktia', 'district' => 'Lajah Ahmad Khel'],
            ['province' => 'Paktia', 'district' => 'Sayed Karam'],
            ['province' => 'Paktia', 'district' => 'Zurmat'],
            // Paktika (subset)
            ['province' => 'Paktika', 'district' => 'Barmal'],
            ['province' => 'Paktika', 'district' => 'Gayan'],
            ['province' => 'Paktika', 'district' => 'Gomal'],
            ['province' => 'Paktika', 'district' => 'Janikhel'],
            ['province' => 'Paktika', 'district' => 'Mata Khan'],
            ['province' => 'Paktika', 'district' => 'Nika'],
            ['province' => 'Paktika', 'district' => 'Omna'],
            ['province' => 'Paktika', 'district' => 'Sar Hawza'],
            ['province' => 'Paktika', 'district' => 'Sharan'],
            ['province' => 'Paktika', 'district' => 'Urgun'],
            ['province' => 'Paktika', 'district' => 'Waza Khwa'],
            ['province' => 'Paktika', 'district' => 'Yahya Khel'],
            ['province' => 'Paktika', 'district' => 'Yusufkhel'],
            // Logar
            ['province' => 'Logar', 'district' => 'Azra'],
            ['province' => 'Logar', 'district' => 'Baraki Barak'],
            ['province' => 'Logar', 'district' => 'Charkh'],
            ['province' => 'Logar', 'district' => 'Kharwar'],
            ['province' => 'Logar', 'district' => 'Mohammad Agha'],
            ['province' => 'Logar', 'district' => 'Pul-e Alam'],
            // Laghman
            ['province' => 'Laghman', 'district' => 'Alingar'],
            ['province' => 'Laghman', 'district' => 'Alishang'],
            ['province' => 'Laghman', 'district' => 'Dawlat Shah'],
            ['province' => 'Laghman', 'district' => 'Mehtarlam'],
            ['province' => 'Laghman', 'district' => 'Qarghayi'],
            // Nuristan
            ['province' => 'Nuristan', 'district' => 'Bargi Matal'],
            ['province' => 'Nuristan', 'district' => 'Du Ab'],
            ['province' => 'Nuristan', 'district' => 'Kamdesh'],
            ['province' => 'Nuristan', 'district' => 'Mandol'],
            ['province' => 'Nuristan', 'district' => 'Nurgaram'],
            ['province' => 'Nuristan', 'district' => 'Parun'],
            ['province' => 'Nuristan', 'district' => 'Wama'],
            // Khost
            ['province' => 'Khost', 'district' => 'Ali Sher'],
            ['province' => 'Khost', 'district' => 'Bak'],
            ['province' => 'Khost', 'district' => 'Gurbuz'],
            ['province' => 'Khost', 'district' => 'Jaji Maydan'],
            ['province' => 'Khost', 'district' => 'Khost (Matun)'],
            ['province' => 'Khost', 'district' => 'Mando Zayi'],
            ['province' => 'Khost', 'district' => 'Musa Khel'],
            ['province' => 'Khost', 'district' => 'Nadir Shah Kot'],
            ['province' => 'Khost', 'district' => 'Qalandar'],
            ['province' => 'Khost', 'district' => 'Sabari'],
            ['province' => 'Khost', 'district' => 'Shamul'],
            // Samangan
            ['province' => 'Samangan', 'district' => 'Aybak'],
            ['province' => 'Samangan', 'district' => 'Dara-i-Suf Bala'],
            ['province' => 'Samangan', 'district' => 'Dara-i-Suf Payin'],
            ['province' => 'Samangan', 'district' => 'Feroz Nakhchir'],
            ['province' => 'Samangan', 'district' => 'Hazrati Sultan'],
            // Takhar (subset)
            ['province' => 'Takhar', 'district' => 'Baharak'],
            ['province' => 'Takhar', 'district' => 'Bang-e-Sherkat'],
            ['province' => 'Takhar', 'district' => 'Chah Ab'],
            ['province' => 'Takhar', 'district' => 'Chal'],
            ['province' => 'Takhar', 'district' => 'Dashti Qala'],
            ['province' => 'Takhar', 'district' => 'Darqad'],
            ['province' => 'Takhar', 'district' => 'Farkhar'],
            ['province' => 'Takhar', 'district' => 'Ishkamish'],
            ['province' => 'Takhar', 'district' => 'Kalafgan'],
            ['province' => 'Takhar', 'district' => 'Khwaja Bahauddin'],
            ['province' => 'Takhar', 'district' => 'Khwaja Ghar'],
            ['province' => 'Takhar', 'district' => 'Namak Ab'],
            ['province' => 'Takhar', 'district' => 'Rostaq'],
            ['province' => 'Takhar', 'district' => 'Taloqan'],
            ['province' => 'Takhar', 'district' => 'Warsaj'],
            // Zabul
            ['province' => 'Zabul', 'district' => 'Arghandab'],
            ['province' => 'Zabul', 'district' => 'Atghar'],
            ['province' => 'Zabul', 'district' => 'Daychopan'],
            ['province' => 'Zabul', 'district' => 'Kakar'],
            ['province' => 'Zabul', 'district' => 'Mizan'],
            ['province' => 'Zabul', 'district' => 'Nawbahar'],
            ['province' => 'Zabul', 'district' => 'Qalat'],
            ['province' => 'Zabul', 'district' => 'Shah Joy'],
            ['province' => 'Zabul', 'district' => 'Shamulzayi'],
            ['province' => 'Zabul', 'district' => 'Shinkay'],
            ['province' => 'Zabul', 'district' => 'Tarnak wa Jaldak'],
        ];
        return $list;
    }
}
