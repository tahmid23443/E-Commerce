import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export const menuData = [
    {
        label: "Women's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Dresses", slug: "womens-dresses" },
                    { label: "Tops", slug: "tops" },
                    { label: "Bags", slug: "womens-bags" },
                ],
            },
            {
                title: "Shoes & Accessories",
                items: [
                    { label: "Shoes", slug: "womens-shoes" },
                    { label: "Jewellery", slug: "womens-jewellery" },
                    { label: "Watches", slug: "womens-watches" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
            {
                title: "Beauty & Care",
                items: [
                    { label: "Beauty", slug: "beauty" },
                    { label: "Skin Care", slug: "skin-care" },
                    { label: "Fragrances", slug: "fragrances" },
                ],
            },
        ],
    },
    {
        label: "Men's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Shirts", slug: "mens-shirts" },
                ],
            },
            {
                title: "Shoes & Accessories",
                items: [
                    { label: "Shoes", slug: "mens-shoes" },
                    { label: "Watches", slug: "mens-watches" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
        ],
    },
    {
        label: "Kid's Fashion",
        columns: [
            {
                title: "Clothing",
                items: [
                    { label: "Tops", slug: "tops" },
                    { label: "Dresses", slug: "womens-dresses" },
                ],
            },
            {
                title: "Sports & Play",
                items: [
                    { label: "Sports Accessories", slug: "sports-accessories" },
                ],
            },
            {
                title: "Bags & Accessories",
                items: [
                    { label: "Bags", slug: "womens-bags" },
                    { label: "Sunglasses", slug: "sunglasses" },
                ],
            },
        ],
    },
    {
        label: "Electronics",
        columns: [
            {
                title: "Devices",
                items: [
                    { label: "Smartphones", slug: "smartphones" },
                    { label: "Laptops", slug: "laptops" },
                    { label: "Tablets", slug: "tablets" },
                ],
            },
            {
                title: "Accessories",
                items: [
                    { label: "Mobile Accessories", slug: "mobile-accessories" },
                ],
            },
        ],
    },
    {
        label: "Home & Lifestyle",
        columns: [
            {
                title: "Furniture",
                items: [
                    { label: "Furniture", slug: "furniture" },
                    { label: "Home Decoration", slug: "home-decoration" },
                ],
            },
            {
                title: "Kitchen",
                items: [
                    { label: "Kitchen Accessories", slug: "kitchen-accessories" },
                ],
            },
        ],
    },
    {
        label: "Sports & Outdoor",
        columns: [
            {
                title: "Sports",
                items: [
                    { label: "Sports Accessories", slug: "sports-accessories" },
                ],
            },
            {
                title: "Vehicles",
                items: [
                    { label: "Motorcycle", slug: "motorcycle" },
                    { label: "Vehicle", slug: "vehicle" },
                ],
            },
        ],
    },
    {
        label: "Food & Grocery",
        columns: [
            {
                title: "Grocery",
                items: [
                    { label: "Groceries", slug: "groceries" },
                ],
            },
        ],
    },
];

export const MegaMenuItem = ({ item, index, total }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, right: 'auto' });
    const ref = useRef(null);
    const isRightAlign = index >= total - 2;

    const handleMouseEnter = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + window.scrollY,
                left: isRightAlign ? 'auto' : rect.left + window.scrollX,
                right: isRightAlign ? window.innerWidth - rect.right : 'auto',
            });
        }
        setIsOpen(true);
    };

    return (
        <li
            ref={ref}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span
                className={`block px-2 py-3 text-base uppercase font-medium cursor-pointer whitespace-nowrap border-b-2 transition-colors duration-150 ${
                    isOpen
                        ? 'text-blue-700 border-blue-700'
                        : 'text-gray-600 border-transparent hover:text-blue-700 hover:border-blue-700'
                }`}
            >
                {item.label}
            </span>

            {isOpen && (
                <div
                    className="fixed bg-white border border-gray-200 border-t-2 border-t-blue-700 shadow-xl z-[9999] rounded-b-lg p-6 flex gap-8"
                    style={{
                        top: dropdownPos.top,
                        left: isRightAlign ? 'auto' : dropdownPos.left,
                        right: isRightAlign ? dropdownPos.right : 'auto',
                        minWidth: 'max-content',
                    }}
                >
                    {item.columns.map((col, i) => (
                        <div key={i} className="min-w-[120px]">
                            <p className="text-sm font-semibold text-gray-900 mb-2 pb-2 border-b border-gray-200">
                                {col.title}
                            </p>
                            <ul className="space-y-2">
                                {col.items.map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            to={`/shop?category=${link.slug}`}
                                            className="text-[12.5px] text-gray-500 hover:text-blue-700 transition-colors duration-100"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </li>
    );
};