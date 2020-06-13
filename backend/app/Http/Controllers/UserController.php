<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function all()
    {
        return User::all();
    }

    public function role(Request $request)
    {
        return response()->json($request->user()->role);
    }

    public function update($id, $role)
    {
        $user = User::where('id', '=', $id)->first();

        $user->role = $role;
        $user->save();

        return $user;
    }
}
