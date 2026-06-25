import { Head, Link } from "@inertiajs/react";
import { FaBox, FaArrowLeft } from "react-icons/fa";

export default function Index({ orders }) {

    return (
        <>
            <Head title="Riwayat Pesanan" />

            <div className="min-h-screen bg-pink-50">

                <div className="container mx-auto px-8 py-10">

                    <Link
                        href="/dashboard"
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
                        Dashboard
                    </Link>

                    <h1 className="text-4xl font-bold text-pink-600 mb-8">
                        Riwayat Pesanan
                    </h1>

                    {orders.length === 0 ? (

                        <div
                            className="
                                bg-white
                                p-10
                                rounded-3xl
                                shadow
                                text-center
                            "
                        >
                            <FaBox
                                className="
                                    mx-auto
                                    text-5xl
                                    text-pink-400
                                "
                            />

                            <h2 className="text-2xl font-bold mt-4">
                                Belum Ada Pesanan
                            </h2>
                        </div>

                    ) : (

                        orders.map((order) => (

                            <div
                                key={order.id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow
                                    p-6
                                    mb-6
                                "
                            >

                                <div className="flex justify-between mb-4">

                                    <div>

                                        <h2 className="font-bold text-xl">
                                            Order #{order.id}
                                        </h2>

                                        <p className="text-gray-500">
                                            {new Date(
                                                order.created_at
                                            ).toLocaleDateString()}
                                        </p>

                                    </div>

                                    <span
                                        className="
                                            bg-yellow-100
                                            text-yellow-700
                                            px-4
                                            py-2
                                            rounded-full
                                            h-fit
                                        "
                                    >
                                        {order.status}
                                    </span>

                                </div>

                                <div className="space-y-2">

                                    {order.items.map((item) => (

                                        <div
                                            key={item.id}
                                            className="
                                                flex
                                                justify-between
                                            "
                                        >
                                            <span>
                                                {item.product.name}
                                            </span>

                                            <span>
                                                x{item.quantity}
                                            </span>
                                        </div>

                                    ))}

                                </div>

                                <hr className="my-4" />

                                <div className="flex justify-between">

                                    <span>Total</span>

                                    <span
                                        className="
                                            font-bold
                                            text-pink-600
                                        "
                                    >
                                        Rp{" "}
                                        {Number(
                                            order.total
                                        ).toLocaleString("id-ID")}
                                    </span>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>
        </>
    );
}