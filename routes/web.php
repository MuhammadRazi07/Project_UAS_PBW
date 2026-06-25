<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\UserProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

use App\Models\Product;

Route::get('/dashboard', function () {

    $products = Product::latest()
        ->take(4)
        ->get();

    return Inertia::render('Dashboard', [
        'products' => $products
    ]);

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/products', function () {
    return Inertia::render('Products/Index');
})->middleware(['auth']);

Route::middleware(['auth'])->group(function () {

    Route::get('/products', [ProductController::class, 'index']);

    Route::get('/products/{product}', [ProductController::class, 'show']);

});

Route::get('/cart', function () {
    return Inertia::render('Cart/Index');
})->middleware(['auth']);

Route::get('/checkout', function () {
    return Inertia::render('Checkout/Index');
})->middleware(['auth']);

Route::get('/checkout/success', function () {
    return Inertia::render('Checkout/Success');
})->middleware(['auth']);

Route::get('/wishlist', function () {
    return Inertia::render('Wishlist/Index');
})->middleware(['auth']);

Route::get('/profile-user', function () {
    return Inertia::render('Profile/Index');
})->middleware(['auth']);

Route::middleware(['auth'])->group(function () {

    Route::get('/cart', [CartController::class,'index']);

    Route::post(
        '/cart/add/{product}',
        [CartController::class,'add']
    );

    Route::delete(
        '/cart/{cartItem}',
        [CartController::class,'destroy']
    );

});

Route::post(
    '/checkout',
    [OrderController::class, 'store']
);

Route::get(
    '/orders',
    [OrderController::class, 'index']
);

Route::middleware([
    'auth',
    'admin'
    ])->group(function () {
    
    // PRODUCTS
    
    Route::get(
        '/admin/products',
        [AdminProductController::class,'index']
    );
    
    Route::get(
        '/admin/products/create',
        [AdminProductController::class,'create']
    );
    
    Route::post(
        '/admin/products',
        [AdminProductController::class,'store']
    );
    
    Route::get(
        '/admin/products/{product}/edit',
        [AdminProductController::class,'edit']
    );
    
    Route::put(
        '/admin/products/{product}',
        [AdminProductController::class,'update']
    );
    
    Route::delete(
        '/admin/products/{product}',
        [AdminProductController::class,'destroy']
    );
    
    // ORDERS
    
    Route::get(
        '/admin/orders',
        [OrderController::class,'adminIndex']
    );
    Route::put(
        '/admin/orders/{order}/status',
        [OrderController::class, 'updateStatus']
    );

    
    });
    

Route::middleware(['auth'])->group(function () {

    Route::get(
        '/wishlist',
        [WishlistController::class,'index']
    );

    Route::post(
        '/wishlist/{product}',
        [WishlistController::class,'store']
    );

    Route::delete(
        '/wishlist/{wishlist}',
        [WishlistController::class,'destroy']
    );

});

Route::middleware(['auth'])->group(function () {

    Route::get(
        '/profile-user',
        [UserProfileController::class,'index']
    );

    Route::put(
        '/profile-user',
        [UserProfileController::class,'update']
    );

});

require __DIR__.'/auth.php';
