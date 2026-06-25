import { Head, Link, router } from "@inertiajs/react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Index({ wishlists }) {

    const hapusWishlist = (id) => {

        if (confirm("Hapus dari wishlist?")) {
            router.delete(`/wishlist/${id}`);
        }

    };

    return (
        <>
            <Head title="Wishlist" />

            <div className="min-h-screen bg-pink-50">

                <div className="container mx-auto px-8 py-10">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <h1 className="text-4xl font-bold text-pink-600">
                                Wishlist Saya
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Produk favorit yang kamu simpan ❤️
                            </p>
                        </div>

                        <Link
                            href="/products"
                            className="
                                bg-pink-500
                                text-white
                                px-5
                                py-3
                                rounded-xl
                                hover:bg-pink-600
                                transition
                            "
                        >
                            Lanjut Belanja
                        </Link>

                    </div>

                    {wishlists.length === 0 ? (

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                shadow-lg
                                p-12
                                text-center
                            "
                        >
                            <FaHeart
                                size={60}
                                className="
                                    text-pink-300
                                    mx-auto
                                    mb-4
                                "
                            />

                            <h2 className="text-2xl font-bold">
                                Wishlist Kosong
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Belum ada produk favorit yang disimpan.
                            </p>

                            <Link
                                href="/products"
                                className="
                                    inline-block
                                    mt-6
                                    bg-pink-500
                                    text-white
                                    px-6
                                    py-3
                                    rounded-xl
                                "
                            >
                                Lihat Produk
                            </Link>
                        </div>

                    ) : (

                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

                            {wishlists.map((item) => (

                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.03 }}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        overflow-hidden
                                        shadow-lg
                                    "
                                >
                                    <div
                                        className="
                                            h-56
                                            bg-pink-200
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        {item.product.image ? (
                                            <img
                                                src={`/storage/${item.product.image}`}
                                                alt={item.product.name}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                "
                                            />
                                        ) : (
                                            <FaHeart
                                                size={60}
                                                className="text-pink-500"
                                            />
                                        )}
                                    </div>

                                    <div className="p-5">

                                        <h3 className="font-bold text-lg">
                                            {item.product.name}
                                        </h3>

                                        <p
                                            className="
                                                text-pink-600
                                                text-xl
                                                font-bold
                                                mt-3
                                            "
                                        >
                                            Rp{" "}
                                            {Number(
                                                item.product.price
                                            ).toLocaleString("id-ID")}
                                        </p>

                                        <div className="flex gap-2 mt-5">

                                            <Link
                                                href={`/cart/add/${item.product.id}`}
                                                method="post"
                                                as="button"
                                                className="
                                                    flex-1
                                                    bg-pink-500
                                                    text-white
                                                    py-2
                                                    rounded-xl
                                                    flex
                                                    justify-center
                                                    items-center
                                                    gap-2
                                                    hover:bg-pink-600
                                                "
                                            >
                                                <FaShoppingCart />
                                                Keranjang
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    hapusWishlist(item.id)
                                                }
                                                className="
                                                    px-4
                                                    bg-red-100
                                                    rounded-xl
                                                    hover:bg-red-200
                                                "
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </div>

                                </motion.div>

                            ))}

                        </div>

                    )}

                </div>

            </div>
        </>
    );
}