import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { menuData, MegaMenuItem } from '../ui/MegaMenuItem'
import Input from '../ui/Input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { GiShoppingCart } from 'react-icons/gi'
import { useLazySearchProductsQuery } from '../services/api'


const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    // ✅ User state — localStorage থেকে নিচ্ছি
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("user")) || null;
        } catch {
            return null;
        }
    });

    // ✅ Logout function
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    // ✅ অন্য page এ লগিন হলেও Navbar update হবে
    useEffect(() => {
        const syncUser = () => {
            try {
                setUser(JSON.parse(localStorage.getItem("user")) || null);
            } catch {
                setUser(null);
            }
        };
        window.addEventListener("storage", syncUser);
        return () => window.removeEventListener("storage", syncUser);
    }, []);

    const [searchTrigger, { data: searchProducts }] = useLazySearchProductsQuery();

    useEffect(() => {
        const delay = setTimeout(() => {
            if (search.trim()) {
                searchTrigger(search);
                setShowDropdown(true);
            } else {
                setShowDropdown(false);
            }
        }, 1000);
        return () => clearTimeout(delay);
    }, [search]);

    const handleSearch = (e) => setSearch(e.target.value);

    const handleKeyDown = async (e) => {
        if (e.key === "Enter" && search.trim()) {
            const result = await searchTrigger(search);
            const firstProduct = result?.data?.products?.[0];
            if (firstProduct) {
                setSearch("");
                setShowDropdown(false);
                navigate(`/shop/${firstProduct.id}`);
            }
        }
    };

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            try {
                const items = JSON.parse(localStorage.getItem('cartProducts')) || [];
                setCartCount(items.length);
            } catch {
                setCartCount(0);
            }
        };
        updateCount();
        window.addEventListener('storage', updateCount);
        return () => window.removeEventListener('storage', updateCount);
    }, []);

    return (
        <header>
            <nav className='py-8'>
                <div className="container flex justify-between flex-wrap md:flex-nowrap gap-5">

                    <Link to="/" className='order-1'>
                        <img src="/nirvoya.png" alt="logo" />
                    </Link>

                    <div className='relative flex bg-[#F1F1F1] h-fit items-center rounded-md w-full md:max-w-md xl:max-w-3xl order-3 md:order-2'>
                        <Input
                            value={search}
                            onKeyDown={handleKeyDown}
                            onChange={handleSearch}
                            placeholder="I'm looking for..."
                            className='border-none w-full bg-transparent'
                        />
                        <Button
                            variant='primary'
                            className='rounded-l-none text-2xl'
                            onClick={async () => {
                                if (search.trim()) {
                                    const result = await searchTrigger(search);
                                    const firstProduct = result?.data?.products?.[0];
                                    if (firstProduct) {
                                        setSearch("");
                                        setShowDropdown(false);
                                        navigate(`/shop/${firstProduct.id}`);
                                    }
                                }
                            }}
                        >
                            <IoSearch />
                        </Button>

                        {showDropdown && searchProducts?.products?.length > 0 && (
                            <div className="absolute top-full left-0 w-full bg-white shadow-2xl z-[9999] rounded-xl mt-1 border border-gray-100">
                                <div className="px-4 pt-4 pb-2">
                                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                        Trending Products
                                    </p>
                                </div>
                                <div className="max-h-[340px] overflow-y-auto px-4 pb-4">
                                    <div className="grid grid-cols-3 gap-2">
                                        {searchProducts.products.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    setSearch("");
                                                    setShowDropdown(false);
                                                    navigate(`/shop/${item.id}`);
                                                }}
                                                className="border border-gray-100 rounded-xl p-2 cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all text-center group"
                                            >
                                                <div className="bg-gray-50 group-hover:bg-gray-100 transition-colors rounded-lg h-[72px] flex items-center justify-center mb-2">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="h-16 w-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-[11px] font-medium truncate text-gray-800">
                                                    {item.title}
                                                </p>
                                                <p className="text-[11px] text-red-500 font-semibold mt-0.5">
                                                    ৳{item.price}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex md:gap-10 gap-5 order-2 md:order-3'>

                        {/* ✅ লগিন থাকলে user এর নাম + Logout, না থাকলে Login */}
                        {user ? (
                            <div className='flex items-center gap-3'>
                                <div className='flex gap-1.5 items-center'>
                                    <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold'>
                                        {user.firstName?.charAt(0).toUpperCase()}
                                    </div>
                                    <span className='hidden md:block text-sm font-medium'>
                                        {user.firstName} {user.lastName}
                                    </span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className='text-sm text-red-500 hover:underline hidden md:block'
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className='flex gap-1.5 items-center'>
                                <FaRegUser className='text-xl' />
                                <span className='hidden md:block'>Login</span>
                            </Link>
                        )}

                        <Link to="/api" className='flex items-center gap-1.5'>
                            <GoHeart className='text-xl' />
                            <span className='hidden md:block'>Wishlist</span>
                        </Link>
                        <Link to="/cart" className='flex items-center gap-1.5'>
                            <GiShoppingCart className='text-2xl' />
                            <span className='hidden md:block'>My Cart</span>
                            <span className='bg-red-500 w-5 h-5 flex items-center rounded-full justify-center text-white'>
                                {cartCount}
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-200 bg-white overflow-x-auto scrollbar-hide">
                    <div className="container">
                        <ul className="flex gap-16 list-none m-0 p-0 w-max">
                            {menuData.map((item, index) => (
                                <MegaMenuItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    total={menuData.length}
                                />
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;
