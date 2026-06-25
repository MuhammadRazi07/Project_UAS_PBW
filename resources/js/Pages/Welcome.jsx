import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    FaShoppingBag,
    FaChild,
    FaHeart,
    FaArrowRight,
} from "react-icons/fa";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Z Aksesoris" />

            <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50">

                {/* Navbar */}
                <nav className="flex justify-between items-center px-8 py-5">
                    <h1 className="text-3xl font-bold text-pink-600">
                        Z Aksesoris
                    </h1>

                    <div className="flex items-center gap-3">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="
                                    w-32
                                    text-center
                                    bg-pink-500
                                    text-white
                                    py-2.5
                                    rounded-full
                                    font-semibold
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                    shadow-lg
                                "
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="
                                        w-28
                                        text-center
                                        py-2.5
                                        rounded-full
                                        border-2
                                        border-pink-500
                                        text-pink-500
                                        font-semibold
                                        hover:bg-pink-50
                                        transition-all
                                        duration-300
                                    "
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="
                                        w-28
                                        text-center
                                        py-2.5
                                        rounded-full
                                        bg-pink-500
                                        text-white
                                        font-semibold
                                        hover:scale-105
                                        transition-all
                                        duration-300
                                        shadow-lg
                                    "
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl font-extrabold leading-tight text-gray-800">
                                Marketplace
                                <span className="text-pink-500">
                                    {" "}Anak Modern
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-600">
                                Temukan pakaian anak, tas, topi,
                                sepatu, aksesoris rambut dan
                                mainan edukatif terbaik dengan
                                tampilan modern dan pengalaman
                                belanja yang menyenangkan.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <Link
                                    href="/register"
                                    className="
                                        bg-pink-500
                                        text-white
                                        px-6
                                        py-3
                                        rounded-full
                                        flex
                                        items-center
                                        gap-2
                                        hover:scale-105
                                        transition
                                    "
                                >
                                    Mulai Belanja
                                    <FaArrowRight />
                                </Link>

                                <Link
                                    href="/login"
                                    className="
                                        border
                                        border-pink-500
                                        text-pink-500
                                        px-6
                                        py-3
                                        rounded-full
                                        hover:bg-pink-50
                                        transition
                                    "
                                >
                                    Login
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="flex justify-center"
                        >
                            <div className="
                                bg-white/70
                                backdrop-blur-md
                                shadow-2xl
                                rounded-3xl
                                p-10
                            ">
                                <FaChild
                                    size={180}
                                    className="text-pink-400"
                                />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/* Features */}
                <section className="container mx-auto px-8 pb-20">

                    <div className="grid md:grid-cols-3 gap-8">

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                            "
                        >
                            <FaShoppingBag
                                size={40}
                                className="text-pink-500 mb-4"
                            />

                            <h3 className="font-bold text-xl">
                                Produk Lengkap
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Berbagai pilihan produk anak
                                berkualitas tinggi dengan harga
                                terbaik.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                            "
                        >
                            <FaHeart
                                size={40}
                                className="text-pink-500 mb-4"
                            />

                            <h3 className="font-bold text-xl">
                                Favorit Customer
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Produk paling diminati oleh
                                pelanggan dari seluruh Indonesia.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="
                                bg-white
                                p-8
                                rounded-3xl
                                shadow-lg
                            "
                        >
                            <FaChild
                                size={40}
                                className="text-pink-500 mb-4"
                            />

                            <h3 className="font-bold text-xl">
                                Child Friendly
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Desain dan produk khusus untuk
                                kebutuhan anak-anak modern.
                            </p>
                        </motion.div>

                    </div>
                </section>

            </div>
        </>
    );
}