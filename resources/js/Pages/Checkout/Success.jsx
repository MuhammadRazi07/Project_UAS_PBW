import { Head, Link } from "@inertiajs/react";
import { FaCheckCircle } from "react-icons/fa";

export default function Success() {
    return (
        <>
            <Head title="Pesanan Berhasil" />

            <div className="min-h-screen bg-pink-50 flex items-center justify-center">

                <div
                    className="
                        bg-white
                        p-10
                        rounded-3xl
                        shadow-xl
                        text-center
                        max-w-lg
                    "
                >
                    <FaCheckCircle
                        size={90}
                        className="mx-auto text-green-500 mb-5"
                    />

                    <h1 className="text-4xl font-bold mb-4">
                        Pesanan Berhasil
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Terima kasih telah berbelanja di
                        Z Aksesoris.
                    </p>

                    <Link
                        href="/products"
                        className="
                            bg-pink-500
                            text-white
                            px-8
                            py-3
                            rounded-xl
                        "
                    >
                        Belanja Lagi
                    </Link>

                </div>

            </div>
        </>
    );
}