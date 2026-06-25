import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    FaHeart,
    FaShoppingCart,
    FaArrowLeft,
    FaStar,
    FaShieldAlt,
    FaTruck,
} from "react-icons/fa";

export default function Show({ product }) {
    return (
        <>
            <Head title={product.name} />

            <div className="min-h-screen bg-pink-50">
                <div className="container mx-auto px-8 py-10">
                    {/* Tombol Kembali */}
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow hover:shadow-lg transition mb-8"
                    >
                        <FaArrowLeft />
                        Kembali ke Produk
                    </Link>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Gambar Produk */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl h-[500px] flex items-center justify-center shadow-xl">
                                <img
                                    src="https://placehold.co/500x500"
                                    alt={product.name}
                                    className="rounded-3xl w-[80%] hover:scale-105 transition"
                                />
                            </div>
                        </motion.div>

                        {/* Detail Produk */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold">{product.name}</h1>

                            {/* Rating Stars */}
                            <div className="flex gap-1 text-yellow-500 mt-3">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <p className="text-pink-600 text-4xl font-bold mt-5">
                                Rp {product.price}
                            </p>

                            <p className="mt-4 text-gray-500">
                                Stok tersedia : {product.stock}
                            </p>

                            {/* Fitur / Info tambahan */}
                            <div className="flex gap-4 mt-6">
                                <div className="bg-white shadow rounded-xl px-4 py-3 flex items-center gap-2">
                                    <FaTruck className="text-pink-500" />
                                    <span className="text-sm">Pengiriman Cepat</span>
                                </div>

                                <div className="bg-white shadow rounded-xl px-4 py-3 flex items-center gap-2">
                                    <FaShieldAlt className="text-pink-500" />
                                    <span className="text-sm">Produk Original</span>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <div className="bg-white p-6 rounded-2xl shadow mt-8">
                                <h3 className="font-bold text-lg mb-3">Deskripsi Produk</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Aksi / Tombol */}
                            <div className="flex gap-4 mt-8">
                                <Link
                                    href={`/cart/add/${product.id}`}
                                    method="post"
                                    as="button"
                                    className="flex-1 bg-pink-500 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:bg-pink-600 hover:scale-[1.02] transition"
                                    >
                                    <FaShoppingCart />
                                    Tambah Keranjang
                                </Link>

                                <Link
                                    href={`/wishlist/${product.id}`}
                                    method="post"
                                    as="button"
                                    className="px-6 bg-white rounded-2xl shadow hover:bg-pink-100 flex items-center justify-center transition"
                                >
                                    <FaHeart className="text-pink-500" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}