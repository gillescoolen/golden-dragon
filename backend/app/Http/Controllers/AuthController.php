<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        //TODO: Validate id and password.
        $credentials = request(['id', 'password']);

        if (!Auth::attempt($credentials)) return $this->unauthorized();

        $token = $request->user()->createToken('Personal Access Token');

        return response()->json($token->plainTextToken);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Successfully logged out.']);
    }

    private function unauthorized()
    {
        return response()->json(['message' => 'Unauthorized'], 401);
    }
}
