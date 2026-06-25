import { Head, Link, useForm } from "@inertiajs/react";
import { FaArrowLeft, FaSave } from "react-icons/fa";

export default function Edit({ product }) {

    const { data, setData, put, processing, errors } =
        useForm({
            name: product.name || "",
            price: product.price || "",
            stock: product.stock || "",
            description: product.description || "",
        });

    const submit = (e) => {
        e.preventDefault();

        put(`/admin/products/${product.id}`);
    };

    return (
        <>
            <Head title={`Edit ${product.name}`} />

            <div className="min-h-screen bg-pink-50">

                <div className="container mx-auto px-8 py-10">

                    <Link
                        href="/admin/products"
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
                        Kembali
                    </Link>

                    <div
                        className="
                            max-w-3xl
                            mx-auto
                            bg-white
                            rounded-3xl
                            shadow-xl
                            p-8
                        "
                    >
                        <h1
                            className="
                                text-4xl
                                font-bold
                                text-pink-600
                                mb-8
                            "
                        >
                            Edit Produk
                        </h1>

                        <form
                            onSubmit={submit}
                            className="space-y-6"
                        >

                            {/* Nama */}
                            <div>

                                <label className="font-semibold">
                                    Nama Produk
                                </label>

                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        border
                                        rounded-xl
                                        p-4
                                    "
                                />

                                {errors.name && (
                                    <p className="text-red-500 mt-1">
                                        {errors.name}
                                    </p>
                                )}

                            </div>

                            {/* Harga */}
                            <div>

                                <label className="font-semibold">
                                    Harga
                                </label>

                                <input
                                    type="number"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData(
                                            "price",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        border
                                        rounded-xl
                                        p-4
                                    "
                                />

                            </div>

                            {/* Stok */}
                            <div>

                                <label className="font-semibold">
                                    Stok
                                </label>

                                <input
                                    type="number"
                                    value={data.stock}
                                    onChange={(e) =>
                                        setData(
                                            "stock",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        border
                                        rounded-xl
                                        p-4
                                    "
                                />

                            </div>

                            {/* Deskripsi */}
                            <div>

                                <label className="font-semibold">
                                    Deskripsi
                                </label>

                                <textarea
                                    rows="5"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        border
                                        rounded-xl
                                        p-4
                                    "
                                />

                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="
                                    w-full
                                    bg-pink-500
                                    text-white
                                    py-4
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    hover:bg-pink-600
                                    transition
                                "
                            >
                                <FaSave />
                                Update Produk
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    );
}