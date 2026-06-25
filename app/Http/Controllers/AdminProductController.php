<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Admin/Products/Index',
            [
                'products' => Product::latest()->get()
            ]
        );
    }

    public function create()
    {
        return Inertia::render(
            'Admin/Products/Create'
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'description' => 'required'
        ]);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description
        ]);

        return redirect('/admin/products');
    }

    public function edit(Product $product)
    {
        return Inertia::render(
            'Admin/Products/Edit',
            [
                'product' => $product
            ]
        );
    }

    public function update(Request $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description
        ]);

        return redirect('/admin/products');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return back();
    }
}