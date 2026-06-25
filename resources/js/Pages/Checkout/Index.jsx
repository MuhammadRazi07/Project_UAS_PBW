import { Head, Link, useForm } from "@inertiajs/react";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaTruck,
    FaCreditCard,
    FaMoneyBillWave,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

export default function Checkout() {
    // Menambahkan 'payment_method' ke form state agar bisa dikirim ke backend
    const { data, setData, post, processing, errors } = useForm({
        customer_name: "",
        phone: "",
        address: "",
        payment_method: "ewallet", // default value
    });

    const submit = (e) => {
        e.preventDefault();
        post("/checkout");
    };

    return (
        <>
            <Head title="Checkout" />

            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
                <div className="container mx-auto px-6 py-10">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-pink-600">Checkout</h1>
                            <p className="text-gray-500 mt-2">Selesaikan pesananmu dengan aman</p>
                        </div>
                        <Link
                            href="/cart"
                            className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <FaArrowLeft />
                            Keranjang
                        </Link>
                    </div>

                    {/* Progress Step */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
                        <div className="flex justify-between">
                            <div className="text-center flex-1">
                                <FaCheckCircle className="mx-auto text-green-500 text-2xl" />
                                <p className="mt-2 font-medium">Produk</p>
                            </div>
                            <div className="text-center flex-1">
                                <FaCheckCircle className="mx-auto text-green-500 text-2xl" />
                                <p className="mt-2 font-medium">Keranjang</p>
                            </div>
                            <div className="text-center flex-1">
                                <div className="w-8 h-8 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center">
                                    3
                                </div>
                                <p className="mt-2 font-bold text-pink-600">Checkout</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Form & Summary */}
                    <form onSubmit={submit}>
                        <div className="grid lg:grid-cols-3 gap-8">
                            
                            {/* FORM UTAMA (Kiri) */}
                            <div className="lg:col-span-2 space-y-6">
                                
                                {/* Alamat Pengiriman */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                        <FaMapMarkerAlt className="text-pink-500" />
                                        Alamat Pengiriman
                                    </h2>

                                    <div className="space-y-5">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Nama Lengkap"
                                                value={data.customer_name}
                                                onChange={(e) => setData("customer_name", e.target.value)}
                                                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                                            />
                                            {errors.customer_name && (
                                                <p className="text-red-500 text-sm mt-1">{errors.customer_name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Nomor HP"
                                                value={data.phone}
                                                onChange={(e) => setData("phone", e.target.value)}
                                                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                            )}
                                        </div>

                                        <div>
                                            <textarea
                                                rows="5"
                                                placeholder="Alamat Lengkap"
                                                value={data.address}
                                                onChange={(e) => setData("address", e.target.value)}
                                                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                                            />
                                            {errors.address && (
                                                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Metode Pengiriman */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                        <FaTruck className="text-pink-500" />
                                        Metode Pengiriman
                                    </h2>
                                    <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                                        <input type="radio" checked readOnly className="text-pink-500 focus:ring-pink-400" />
                                        <span>Reguler (2-4 Hari)</span>
                                    </label>
                                </div>

                                {/* Metode Pembayaran */}
                                <div className="bg-white rounded-3xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                        <FaCreditCard className="text-pink-500" />
                                        Metode Pembayaran
                                    </h2>

                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition">
                                            <input
                                                type="radio"
                                                name="payment_method"
                                                value="ewallet"
                                                checked={data.payment_method === "ewallet"}
                                                onChange={(e) => setData("payment_method", e.target.value)}
                                                className="text-pink-500 focus:ring-pink-400"
                                            />
                                            <FaWallet className="text-gray-600" />
                                            <span>E-Wallet</span>
                                        </label>

                                        <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition">
                                            <input
                                                type="radio"
                                                name="payment_method"
                                                value="transfer"
                                                checked={data.payment_method === "transfer"}
                                                onChange={(e) => setData("payment_method", e.target.value)}
                                                className="text-pink-500 focus:ring-pink-400"
                                            />
                                            <FaCreditCard className="text-gray-600" />
                                            <span>Transfer Bank</span>
                                        </label>

                                        <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition">
                                            <input
                                                type="radio"
                                                name="payment_method"
                                                value="cod"
                                                checked={data.payment_method === "cod"}
                                                onChange={(e) => setData("payment_method", e.target.value)}
                                                className="text-pink-500 focus:ring-pink-400"
                                            />
                                            <FaMoneyBillWave className="text-gray-600" />
                                            <span>COD (Bayar di Tempat)</span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            {/* SIDEBAR RINGKASAN (Kanan) */}
                            <div>
                                <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                                    <h2 className="text-2xl font-bold mb-6">Ringkasan Pesanan</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Total Produk</span>
                                            <span>2 Item</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>Rp225.000</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Ongkir</span>
                                            <span>Rp15.000</span>
                                        </div>
                                    </div>

                                    <hr className="my-5" />

                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">Total Bayar</span>
                                        <span className="text-2xl font-bold text-pink-600">Rp240.000</span>
                                    </div>

                                    <div className="mt-5 bg-pink-50 border border-pink-100 rounded-2xl p-4 space-y-2">
                                        <p className="text-sm text-gray-600">✓ Produk akan diproses setelah pesanan dibuat</p>
                                        <p className="text-sm text-gray-600">✓ Estimasi pengiriman 2-4 hari kerja</p>
                                        <p className="text-sm text-gray-600">✓ Pembayaran aman & terenkripsi</p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full mt-6 bg-pink-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-pink-600 hover:scale-[1.02] transition disabled:opacity-50 disabled:scale-100"
                                    >
                                        {processing ? "Memproses..." : "Buat Pesanan"}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}