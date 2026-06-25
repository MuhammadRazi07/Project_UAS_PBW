import { Head, Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    FaTshirt,
    FaShoppingBag,
    FaChild,
    FaGift,
    FaHeart,
    FaStar,
    FaHome,
    FaShoppingCart,
    FaUser,
    FaSignOutAlt,
    FaBox,
} from "react-icons/fa";

export default function Dashboard({ products = [] }) {
    const logout = () => {
        router.post(route("logout"));
    };

    const categories = [
        { name: "Pakaian Anak", icon: <FaTshirt size={35} /> },
        { name: "Tas Anak", icon: <FaShoppingBag size={35} /> },
        { name: "Aksesoris", icon: <FaHeart size={35} /> },
        { name: "Mainan Edukatif", icon: <FaGift size={35} /> },
    ];

    return (
        <>
            <Head title="Beranda" />

            <div className="min-h-screen bg-pink-50">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100 shadow-sm">
                    <div className="container mx-auto px-8 py-4 flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                                <FaShoppingBag className="text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-pink-600">
                                Z Aksesoris
                            </h1>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaHome /> Home
                            </Link>
                            <Link href="/products" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaShoppingBag /> Produk
                            </Link>
                            <Link href="/wishlist" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaHeart /> Wishlist
                            </Link>
                            <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaShoppingCart /> Keranjang
                            </Link>
                            <Link href="/orders" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaBox /> Pesanan
                            </Link>
                            <Link href="/profile-user" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                <FaUser /> Profil
                            </Link>
                            <Link href="/admin/products" className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition">
                                Admin
                            </Link>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition duration-200"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-10 text-white shadow-xl"
                    >
                        <h1 className="text-5xl font-bold mb-4">
                            Selamat Datang di Z Aksesoris
                        </h1>
                        <p className="text-lg opacity-90 max-w-2xl">
                            Marketplace modern untuk pakaian anak, tas, sepatu,
                            aksesoris rambut, dan mainan edukatif terbaik.
                        </p>
                    </motion.div>
                </section>

                {/* Kategori Populer */}
                <section className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold mb-6">Kategori Populer</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-3xl shadow-lg p-6 text-center cursor-pointer border border-pink-50 hover:border-pink-200 transition"
                            >
                                <div className="flex justify-center text-pink-500 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {item.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Menu Cepat */}
                <section className="container mx-auto px-8 py-12">
                    <h2 className="text-3xl font-bold mb-6">Menu Cepat</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Link href="/products" className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition block border border-pink-50">
                            <h3 className="font-bold text-xl text-pink-600">Produk</h3>
                            <p className="text-gray-500 mt-2 text-sm">Lihat semua produk</p>
                        </Link>

                        <Link href="/cart" className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition block border border-pink-50">
                            <h3 className="font-bold text-xl text-pink-600">Keranjang</h3>
                            <p className="text-gray-500 mt-2 text-sm">Produk yang dipilih</p>
                        </Link>

                        <Link href="/wishlist" className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition block border border-pink-50">
                            <h3 className="font-bold text-xl text-pink-600">Wishlist</h3>
                            <p className="text-gray-500 mt-2 text-sm">Produk favorit</p>
                        </Link>

                        <Link href="/orders" className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition block border border-pink-50">
                            <h3 className="font-bold text-xl text-pink-600">Pesanan</h3>
                            <p className="text-gray-500 mt-2 text-sm">Riwayat pembelian</p>
                        </Link>
                    </div>
                </section>

                {/* Produk Terbaru */}
                <section className="container mx-auto px-8 pb-12">
                    <h2 className="text-3xl font-bold mb-6">Produk</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {(!products || products.length === 0) && (
                            <div className="col-span-full text-center py-10">
                                <h3 className="text-xl font-bold text-gray-400">
                                    Belum ada produk saat ini.
                                </h3>
                            </div>
                        )}
                        
                        {products?.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="h-52 bg-pink-200 flex items-center justify-center overflow-hidden">
                                        {product.image ? (
                                            <img
                                                src={`/storage/${product.image}`}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <FaChild size={70} className="text-pink-500" />
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-1 text-yellow-500 mt-2">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>

                                        <p className="text-pink-600 font-bold text-xl mt-3">
                                            Rp {Number(product.price).toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-5 pt-0">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-full bg-pink-500 text-white py-2.5 rounded-xl hover:bg-pink-600 transition block text-center font-medium"
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}