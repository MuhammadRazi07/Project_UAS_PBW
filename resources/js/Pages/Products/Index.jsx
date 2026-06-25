import { Head, Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaHeart, FaSearch, FaStar } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Index({ products = [], filters }) {
    const [search, setSearch] = useState(filters?.search || "");
    const isFirstRender = useRef(true);

    // Debounce Effect untuk Pencarian agar hemat resource server
    useEffect(() => {
        // Skip pencarian otomatis pada render pertama
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            router.get(
                "/products",
                { search: search },
                {
                    preserveState: true,
                    replace: true,
                }
            );
        }, 400); // Request dikirim setelah user berhenti mengetik selama 400ms

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    return (
        <>
            <Head title="Produk" />

            <div className="min-h-screen bg-pink-50 text-slate-800 antialiased">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white shadow-sm">
                    <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
                        <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
                            Z Aksesoris
                        </h1>
                        <Link
                            href="/dashboard"
                            className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-pink-600 shadow-sm"
                        >
                            Dashboard
                        </Link>
                    </div>
                </nav>

                <div className="container mx-auto px-6 py-10 md:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold text-pink-600 md:text-4xl">
                            Semua Produk
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm border border-pink-100 focus-within:border-pink-300 transition-all">
                        <FaSearch className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Cari produk impianmu..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    {/* Empty State */}
                    {products.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-dashed border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-500">
                                Produk tidak ditemukan
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Coba cari dengan kata kunci yang berbeda.
                            </p>
                        </div>
                    )}

                    {/* Produk Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -5 }}
                                className="overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                            >
                                <div>
                                    {/* Image Placeholder */}
                                    <div className="flex h-56 items-center justify-center bg-pink-100 relative">
                                        <FaShoppingBag
                                            size={55}
                                            className="text-pink-400"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-5">
                                        <h3 className="text-md font-bold text-gray-800 line-clamp-2 min-h-[3rem]">
                                            {product.name}
                                        </h3>

                                        {/* Rating (Statik) */}
                                        <div className="mt-2 flex gap-1 text-sm text-amber-400">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0">
                                    {/* Harga */}
                                    <p className="text-xl font-extrabold text-pink-600 mb-4">
                                        Rp {Number(product.price).toLocaleString("id-ID")}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="flex-1 rounded-xl bg-pink-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-pink-600 shadow-sm"
                                        >
                                            Detail
                                        </Link>

                                        <Link
                                            href={`/wishlist/${product.id}`}
                                            method="post"
                                            as="button"
                                            className="flex items-center justify-center rounded-xl bg-pink-50 px-4 text-pink-600 transition hover:bg-pink-100"
                                        >
                                            <FaHeart />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}