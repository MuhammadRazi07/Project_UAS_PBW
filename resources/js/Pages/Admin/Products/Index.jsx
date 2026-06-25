import { Head, Link, router } from "@inertiajs/react";
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaArrowLeft,
    FaBoxOpen,
    FaShoppingBag,
} from "react-icons/fa";

export default function Index({ products }) {
    const hapus = (id) => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            router.delete(`/admin/products/${id}`);
        }
    };

    return (
        <>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen bg-pink-50/50 text-gray-800 antialiased">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                    
                    {/* 1. TOP NAVIGATION / BACK BUTTON */}
                    <div className="mb-6">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-pink-600 transition-colors duration-200"
                        >
                            <FaArrowLeft className="text-xs" />
                            Kembali ke Website
                        </Link>
                    </div>

                    {/* 2. HEADER SECTION */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-pink-100 pb-8 mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Dashboard Admin
                            </h1>
                            <p className="text-gray-500 mt-1 text-sm">
                                Kelola katalog produk dan pantau performa toko Anda.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/admin/orders"
                                className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-5 py-3 rounded-xl font-medium text-sm hover:bg-gray-50 shadow-sm transition-all duration-200"
                            >
                                <FaShoppingBag className="text-pink-500" />
                                Data Pesanan
                            </Link>

                            <Link
                                href="/admin/products/create"
                                className="inline-flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-xl font-medium text-sm hover:bg-pink-600 shadow-sm transition-all duration-200"
                            >
                                <FaPlus />
                                Tambah Produk
                            </Link>
                        </div>
                    </div>

                    {/* 3. QUICK STATS MINI CARD */}
                    <div className="mb-8 max-w-xs">
                        <div className="bg-white rounded-2xl border border-pink-100 p-5 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl">
                                <FaBoxOpen className="text-xl" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Produk</p>
                                <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. MAIN CONTENT (TABLE / EMPTY STATE) */}
                    {products.length === 0 ? (
                        <div className="bg-white rounded-3xl p-16 shadow-sm border border-pink-100 text-center max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FaBoxOpen className="text-3xl" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900"> Belum Ada Produk </h2>
                            <p className="text-gray-500 mt-2 text-sm max-w-sm mx-auto">
                                Sepertinya Anda belum menambahkan produk apapun ke katalog toko.
                            </p>
                            <Link
                                href="/admin/products/create"
                                className="inline-flex items-center gap-2 mt-6 bg-pink-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-pink-600 transition"
                            >
                                <FaPlus /> Buat Produk Pertama
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead>
                                        <tr className="bg-pink-100/60 border-b border-pink-100 text-pink-800 text-xs uppercase tracking-wider font-semibold">
                                            <th className="p-4 text-left">Nama Produk</th>
                                            <th className="p-4 text-left">Harga Jual</th>
                                            <th className="p-4 text-left">Sisa Stok</th>
                                            <th className="p-4 text-center w-28">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                                        {products.map((product) => (
                                            <tr 
                                                key={product.id} 
                                                className="hover:bg-pink-50/30 transition-colors duration-150"
                                            >
                                                <td className="p-4 font-medium text-gray-900 max-w-md truncate">
                                                    {product.name}
                                                </td>
                                                <td className="p-4 font-semibold text-gray-900">
                                                    Rp {Number(product.price).toLocaleString("id-ID")}
                                                </td>
                                                <td className="p-4">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                                                        product.stock > 0 ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                                                    }`}>
                                                        {product.stock} pcs
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            href={`/admin/products/${product.id}/edit`}
                                                            className="inline-flex items-center justify-center w-9 h-9 bg-gray-50 text-gray-600 border border-gray-200 rounded-xl hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50 shadow-sm transition-all duration-150"
                                                            title="Edit Produk"
                                                        >
                                                            <FaEdit className="text-sm" />
                                                        </Link>
                                                        <button
                                                            onClick={() => hapus(product.id)}
                                                            className="inline-flex items-center justify-center w-9 h-9 bg-gray-50 text-gray-400 border border-gray-200 rounded-xl hover:text-red-600 hover:border-red-200 hover:bg-red-50 shadow-sm transition-all duration-150"
                                                            title="Hapus Produk"
                                                        >
                                                            <FaTrash className="text-sm" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}