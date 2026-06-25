<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WishlistController extends Controller
{
    public function index()
    {
        $wishlists = Wishlist::with('product')
            ->where('user_id', Auth::id())
            ->latest()
            ->get();

        return Inertia::render(
            'Wishlist/Index',
            [
                'wishlists' => $wishlists
            ]
        );
    }

    public function store(Product $product)
    {
        Wishlist::firstOrCreate([
            'user_id' => Auth::id(),
            'product_id' => $product->id
        ]);

        return back();
    }

    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();

        return back();
    }
}