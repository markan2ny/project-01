<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'cpassword' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            $response = ['success' => false, 'message' => $validator->errors()];

            return response()->json($response, 400);
        }

        $password = bcrypt($request->password);
        $u = [
            'name' => $request->name, 'email' => $request->email, 'password' => $password
        ];
        $user = User::create($u);

        // Declarde array to store user token and name
        $a = [];

        $__token = $user->createToken('CRUD')->plainTextToken;
        $__name = $user->name;

        array_push($a, $__token, $__name);

        $response = [
            'success' => true,
            'data' => $a,
            'message' => 'Successfully registered'
        ];

        return response()->json($response, 200);
    }


    public function login(Request $request)
    {

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $details = [];
            $__token = $user->createToken('CRUD')->plainTextToken;
            $__name = $user->name;
            array_push($details, $__token, $__name);

            return response()->json($details);
        } else {
            $response = ['success' => false, 'message' => 'Invalid Credentials'];

            return response()->json($response, 400);
        }
    }
}
