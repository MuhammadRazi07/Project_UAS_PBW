import { Head, Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaShoppingBag,
} from "react-icons/fa";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex items-center justify-center p-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
                        w-full
                        max-w-md
                        bg-white/70
                        backdrop-blur-lg
                        shadow-2xl
                        rounded-3xl
                        p-8
                    "
                >
                    <div className="text-center mb-8">

                        <div className="flex justify-center mb-4">
                            <div className="bg-pink-500 p-4 rounded-full shadow-lg">
                                <FaShoppingBag
                                    size={28}
                                    className="text-white"
                                />
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-pink-600">
                            Z Aksesoris
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Buat akun baru
                        </p>
                    </div>

                    <form onSubmit={submit}>

                        <div className="mb-4">
                            <label className="font-medium">
                                Nama Lengkap
                            </label>

                            <div className="relative mt-2">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="
                                        w-full
                                        pl-11
                                        pr-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                    "
                                    placeholder="Masukkan nama"
                                />
                            </div>

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="font-medium">
                                Email
                            </label>

                            <div className="relative mt-2">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="
                                        w-full
                                        pl-11
                                        pr-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                    "
                                    placeholder="Masukkan email"
                                />
                            </div>

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="font-medium">
                                Password
                            </label>

                            <div className="relative mt-2">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="
                                        w-full
                                        pl-11
                                        pr-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                    "
                                    placeholder="Masukkan password"
                                />
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="font-medium">
                                Konfirmasi Password
                            </label>

                            <div className="relative mt-2">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        pl-11
                                        pr-4
                                        py-3
                                        rounded-xl
                                        border
                                        border-gray-200
                                    "
                                    placeholder="Konfirmasi password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                w-full
                                bg-pink-500
                                text-white
                                py-3
                                rounded-xl
                                font-semibold
                                hover:scale-105
                                transition-all
                                duration-300
                                shadow-lg
                            "
                        >
                            {processing
                                ? "Memproses..."
                                : "Register"}
                        </button>

                        <div className="text-center mt-6">
                            <span className="text-gray-500">
                                Sudah punya akun?
                            </span>

                            <Link
                                href="/login"
                                className="
                                    ml-2
                                    text-pink-500
                                    font-semibold
                                "
                            >
                                Login
                            </Link>
                        </div>

                    </form>
                </motion.div>
            </div>
        </>
    );
}