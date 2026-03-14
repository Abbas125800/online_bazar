<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->userPassword, $user->userPassword)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'user' => $user,
            'message' => 'login success'
        ]);
    }

    public function logout(Request $request)
    {
        return response()->json([
            'message' => 'logout success'
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName'    => 'required|string|max:100',
            'lastName'     => 'nullable|string|max:100',
            'phone'        => 'nullable|string|max:16|unique:users,phone',
            'email'        => 'required|email|unique:users,email',
            'userPassword' => 'required|string|min:8',
            'distrectId'   => 'required|exists:distrects,id',
            'role'         => 'in:admin,vendor',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        $data['userPassword'] = Hash::make($data['userPassword']);
        $data['role'] = $data['role'] ?? 'vendor';

        $user = User::create($data);

        return response()->json([
            'user'  => $user,
            'message' => 'register success'
        ], 201);
    }
}
