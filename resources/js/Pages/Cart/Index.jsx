import { Head, Link, router } from "@inertiajs/react";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

export default function Index({ cart }) {

    const items = cart?.items || [];

    const total = items.reduce(
        (sum, item) =>
            sum + (item.product.price * item.quantity),
        0
    );

    const hapus = (id) => {

        if (confirm("Hapus produk dari keranjang?")) {

            router.delete(`/cart/${id}`);

        }

    };

    return (
        <>
            <Head title="Keranjang" />

            <div className="min-h-screen bg-pink-50">

                <div className="container mx-auto px-8 py-10">

                    <Link
                        href="/products"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-white
                            px-5
                            py-3
                            rounded-xl
                            shadow
                            mb-8
                        "
                    >
                        <FaArrowLeft />
                        Kembali Belanja
                    </Link>

                    <h1 className="text-4xl font-bold text-pink-600 mb-8">
                        Keranjang Belanja
                    </h1>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Produk */}
                        <div className="lg:col-span-2">

                            {items.length === 0 ? (

                                <div
                                    className="
                                        bg-white
                                        p-10
                                        rounded-3xl
                                        shadow
                                        text-center
                                    "
                                >
                                    <h2 className="text-2xl font-bold">
                                        Keranjang Kosong
                                    </h2>

                                    <p className="text-gray-500 mt-3">
                                        Belum ada produk yang ditambahkan.
                                    </p>
                                </div>

                            ) : (

                                items.map((item) => (

                                    <div
                                        key={item.id}
                                        className="
                                            bg-white
                                            rounded-2xl
                                            shadow
                                            p-5
                                            mb-4
                                            flex
                                            justify-between
                                            items-center
                                        "
                                    >
                                        <div>

                                            <h3 className="font-bold text-lg">
                                                {item.product.name}
                                            </h3>

                                            <p className="text-gray-500">
                                                Qty : {item.quantity}
                                            </p>

                                        </div>

                                        <div className="flex items-center gap-5">

                                            <p className="font-bold text-pink-600">
                                                Rp{" "}
                                                {Number(
                                                    item.product.price
                                                ).toLocaleString("id-ID")}
                                            </p>

                                            <button
                                                onClick={() => hapus(item.id)}
                                                className="
                                                    bg-red-100
                                                    p-3
                                                    rounded-xl
                                                    hover:bg-red-200
                                                "
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </div>

                                ))

                            )}

                        </div>

                        {/* Ringkasan */}
                        <div
                            className="
                                bg-white
                                rounded-3xl
                                shadow-lg
                                p-6
                                h-fit
                            "
                        >
                            <h2 className="text-2xl font-bold mb-5">
                                Ringkasan
                            </h2>

                            <div className="flex justify-between mb-4">

                                <span>Total</span>

                                <span className="font-bold text-pink-600">
                                    Rp {total.toLocaleString("id-ID")}
                                </span>

                            </div>

                            <Link
                                href="/checkout"
                                className="
                                    block
                                    text-center
                                    bg-pink-500
                                    text-white
                                    py-3
                                    rounded-xl
                                    mt-5
                                    hover:bg-pink-600
                                "
                            >
                                Checkout
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}