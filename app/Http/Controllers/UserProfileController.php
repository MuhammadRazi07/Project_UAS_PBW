<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    public function index()

    {
        return Inertia::render('Profile/Index', [

            'user' => Auth::user()

        ]);

    }

    public function update(Request $request)

    {

        $user = Auth::user();
        $request->validate([
            'name'  => 'required',
            'email' => 'required|email',
            'phone' => 'nullable',

        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;

        if ($request->password) {
            $user->password = Hash::make(
                $request->password
            );

        }

        $user->save();
        return back();

    }

} 