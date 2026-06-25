<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Menyimpan pesanan baru (Checkout).
     */
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'phone'         => 'required|string|max:20',
            'address'       => 'required|string',
        ]);

        $cart = Cart::with('items.product')
            ->where('user_id', Auth::id())
            ->first();

        if (!$cart || $cart->items->isEmpty()) {
            return back()->with('error', 'Keranjang belanja Anda kosong.');
        }

        // Menggunakan Database Transaction demi keamanan data (Atomicity)
        $order = DB::transaction(function () use ($cart, $request) {
            $total = 0;

            foreach ($cart->items as $item) {
                $total += $item->product->price * $item->quantity;
            }

            // 1. Buat data Order utama
            $order = Order::create([
                'user_id'       => Auth::id(),
                'customer_name' => $request->customer_name,
                'phone'         => $request->phone,
                'address'       => $request->address,
                'total'         => $total,
                'status'        => 'pending',
            ]);

            // 2. Pindahkan item dari keranjang ke item pesanan
            foreach ($cart->items as $item) {
                OrderItem::create([
                    'order_id'   => $order->id,
                    'product_id' => $item->product_id,
                    'quantity'   => $item->quantity,
                    'price'      => $item->product->price,
                ]);
            }

            // 3. Kosongkan item di keranjang belanja
            $cart->items()->delete();

            return $order;
        });

        return redirect('/checkout/success');
    }

    /**
     * Menampilkan riwayat pesanan milik user yang sedang login.
     */
    public function index()
    {
        $orders = Order::with('items.product')
            ->where('user_id', Auth::id())
            ->latest()
            ->get();

        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    /**
     * Menampilkan semua daftar pesanan untuk Admin.
     */
    public function adminIndex()
    {
        $orders = Order::with(['user', 'items.product'])
            ->latest()
            ->get();

        return Inertia::render('Admin/Orders/Index', [
            'orders' => $orders,
        ]);
    }

    /**
     * Memperbarui status pesanan (Fitur Admin).
     */
    public function updateStatus(Request $request, Order $order)
    {
    $request->validate([
    'status' => 'required|in:pending,diproses,dikirim,selesai',
    ]);
    
    $order->update([
        'status' => $request->status,
    ]);
    
    return back();
    
    }
    
}