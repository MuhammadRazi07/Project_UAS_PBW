import { Link, router } from "@inertiajs/react";
import {
    FaHome,
    FaShoppingBag,
    FaShoppingCart,
    FaHeart,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {

    const logout = () => {
        router.post(route("logout"));
    };

    return (
        <nav
            className="
                sticky
                top-0
                z-50
                bg-white/90
                backdrop-blur-lg
                border-b
                border-pink-100
                shadow-sm
            "
        >
            <div className="container mx-auto px-8 py-4 flex items-center justify-between">

                <Link
                    href="/dashboard"
                    className="
                        text-2xl
                        font-bold
                        text-pink-600
                    "
                >
                    Z Aksesoris
                </Link>

                <div className="flex items-center gap-8">

                    <Link
                        href="/dashboard"
                        className="hover:text-pink-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaHome />
                            Home
                        </div>
                    </Link>

                    <Link
                        href="/products"
                        className="hover:text-pink-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaShoppingBag />
                            Produk
                        </div>
                    </Link>

                    <Link
                        href="/cart"
                        className="hover:text-pink-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaShoppingCart />
                            Keranjang
                        </div>
                    </Link>

                    <Link
                        href="#"
                        className="hover:text-pink-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaHeart />
                            Wishlist
                        </div>
                    </Link>

                    <Link
                        href="#"
                        className="hover:text-pink-500"
                    >
                        <div className="flex items-center gap-2">
                            <FaUser />
                            Profil
                        </div>
                    </Link>

                </div>

                <button
                    onClick={logout}
                    className="
                        bg-pink-500
                        text-white
                        px-5
                        py-2
                        rounded-full
                        hover:bg-pink-600
                        transition
                    "
                >
                    <div className="flex items-center gap-2">
                        <FaSignOutAlt />
                        Logout
                    </div>
                </button>

            </div>
        </nav>
    );
}