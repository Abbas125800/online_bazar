<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Post; // اگر دارید
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function stats(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user' => $user,
            'stats' => [
                'users' => User::count(),
                'posts' => Post::count(),
            ]
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
