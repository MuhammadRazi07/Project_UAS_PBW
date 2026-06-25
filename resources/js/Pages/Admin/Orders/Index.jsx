import { Head, Link, router } from "@inertiajs/react";

export default function Index({ orders }) {
    const updateStatus = (id, status) => {
        router.put(`/admin/orders/${id}/status`, {
            status,
        });
    };

    // Fungsi pembantu untuk menentukan warna badge status
    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "diproses":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "dikirim":
                return "bg-purple-100 text-purple-800 border-purple-200";
            case "selesai":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    // Menghitung ringkasan data
    const totalOrders = orders?.length || 0;
    const totalRevenue = orders?.reduce((acc, curr) => acc + Number(curr.total), 0) || 0;

    return (
        <>
            <Head title="Pesanan" />

            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                
                {/* 1. HEADER SECTION */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            Data Pesanan
                        </h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Kelola dan pantau semua transaksi pesanan pelanggan Anda.
                        </p>
                    </div>
                    
                    <div>
                        <Link
                            href="/admin/products"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-pink-500 hover:bg-pink-600 shadow-sm transition-colors duration-200"
                        >
                            Kembali ke Dashboard Admin
                        </Link>
                    </div>
                </div>

                {/* 2. SUMMARY CARDS SECTION */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                    {/* Card 1: Total Pesanan */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-xl bg-pink-100 text-pink-600">
                                📊
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 truncate">Total Pesanan</p>
                                <p className="text-2xl font-semibold text-gray-900">{totalOrders}</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Total Pendapatan */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-2xl border border-gray-100 p-6">
                        <div className="flex items-center">
                            <div className="p-3 rounded-xl bg-green-100 text-green-600">
                                💰
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 truncate">Total Pendapatan</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    Rp {totalRevenue.toLocaleString("id-ID")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. TABLE SECTION */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="bg-pink-50 border-b border-pink-100 text-pink-700 uppercase text-xs tracking-wider font-semibold">
                                    <th className="p-4 text-left">ID Pesanan</th>
                                    <th className="p-4 text-left">Pelanggan</th>
                                    <th className="p-4 text-left">Total Bayar</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Tanggal Transaksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                                {orders && orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50/70 transition-colors">
                                            <td className="p-4 font-medium text-gray-900">
                                                #{order.id}
                                            </td>
                                            <td className="p-4">
                                                <div className="font-medium text-gray-900">
                                                    {order.user?.name || "Guest User"}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {order.user?.email || "-"}
                                                </div>
                                            </td>
                                            <td className="p-4 font-semibold text-gray-900">
                                                Rp {Number(order.total).toLocaleString("id-ID")}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-2">
                                                    {/* Dropdown Select Status */}
                                                    <select
                                                        value={order.status}
                                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                                        className={`border rounded-lg px-2 py-1 text-xs font-medium border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500`}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="diproses">Diproses</option>
                                                        <option value="dikirim">Dikirim</option>
                                                        <option value="selesai">Selesai</option>
                                                    </select>

                                                    {/* Badge Visual Status */}
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                                                        {order.status.toUpperCase()}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-500">
                                                {new Date(order.created_at).toLocaleDateString("id-ID", {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-16 text-gray-400">
                                            <div className="text-4xl mb-2">📦</div>
                                            <p className="font-medium">Belum ada pesanan masuk</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}