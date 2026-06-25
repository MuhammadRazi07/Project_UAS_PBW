// Tambahkan Link ke dalam import @inertiajs/react
import { useForm, Head, Link } from "@inertiajs/react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLock,
    FaCamera,
    FaArrowLeft, // Tambahkan ikon panah kembali
} from "react-icons/fa";

export default function Profile({ user }) {
    const { data, setData, put, processing } = useForm({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        put("/profile-user");
    };

    return (
        <>
            <Head title="Profil Saya" />

            <div className="min-h-screen bg-pink-50">
                <div className="container mx-auto px-4 sm:px-8 py-10">
                    
                    {/* BARIS JUDUL & TOMBOL KEMBALI */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <h1 className="text-4xl font-bold text-pink-600">
                            Profil Saya
                        </h1>
                        
                        {/* Tombol Kembali ke Dashboard */}
                        <Link
                            href="/dashboard" // Sesuaikan dengan route dashboard Anda
                            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-medium px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm transition w-fit"
                        >
                            <FaArrowLeft className="text-gray-500 text-sm" />
                            Kembali ke Dashboard
                        </Link>
                    </div>

                    <form onSubmit={submit} className="grid lg:grid-cols-3 gap-8">

                        {/* FOTO */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
                                <div className="w-40 h-40 rounded-full bg-pink-200 mx-auto flex items-center justify-center overflow-hidden">
                                    <FaUser size={70} className="text-pink-500" />
                                </div>

                                <button
                                    type="button"
                                    className="mt-5 bg-pink-500 hover:bg-pink-600 transition text-white px-5 py-2 rounded-xl flex items-center gap-2 mx-auto shadow-md"
                                >
                                    <FaCamera />
                                    Ganti Foto
                                </button>
                            </div>
                        </div>

                        {/* DATA */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                                    Informasi Akun
                                </h2>

                                <div className="space-y-6">
                                    {/* NAMA */}
                                    <div>
                                        <label className="font-medium mb-2 block text-gray-700">
                                            Nama Lengkap
                                        </label>
                                        <div className="relative">
                                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData("name", e.target.value)}
                                                className="w-full border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-xl py-4 pl-12 pr-4 outline-none transition"
                                                placeholder="Masukkan nama lengkap"
                                            />
                                        </div>
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label className="font-medium mb-2 block text-gray-700">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData("email", e.target.value)}
                                                className="w-full border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-xl py-4 pl-12 pr-4 outline-none transition"
                                                placeholder="namamu@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* NOMOR HP */}
                                    <div>
                                        <label className="font-medium mb-2 block text-gray-700">
                                            Nomor HP
                                        </label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={data.phone}
                                                onChange={(e) => setData("phone", e.target.value)}
                                                className="w-full border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-xl py-4 pl-12 pr-4 outline-none transition"
                                                placeholder="0812xxxxxx"
                                            />
                                        </div>
                                    </div>

                                    {/* PASSWORD BARU */}
                                    <div>
                                        <label className="font-medium mb-2 block text-gray-700">
                                            Password Baru
                                        </label>
                                        <div className="relative">
                                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="password"
                                                value={data.password}
                                                onChange={(e) => setData("password", e.target.value)}
                                                className="w-full border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 rounded-xl py-4 pl-12 pr-4 outline-none transition"
                                                placeholder="Kosongkan jika tidak ingin mengubah"
                                            />
                                        </div>
                                    </div>

                                    {/* TOMBOL SIMPAN */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 disabled:bg-pink-300 text-white font-semibold px-8 py-3 rounded-xl transition shadow-md"
                                        >
                                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}