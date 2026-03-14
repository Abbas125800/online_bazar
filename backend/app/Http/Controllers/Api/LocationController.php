<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    public function provinces()
    {
        $provinces = DB::table('provinces')
            ->select('id', 'provinceName as name')
            ->orderBy('provinceName')
            ->get();

        return response()->json($provinces);
    }

    public function districts(Request $request)
    {
        $query = DB::table('distrects')->select('id', 'districtName as name', 'provinceId');

        if ($request->has('province_id')) {
            $query->where('provinceId', $request->get('province_id'));
        }

        return response()->json($query->orderBy('districtName')->get());
    }
}
