import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger & close

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (item) => {
        setActive(item);
        setIsMenuOpen(false); // Close drawer on mobile

        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    return (
        <>
            {/* Navbar */}
            <div
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg shadow-md" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
                    {/* Logo */}
                    <span className="text-2xl font-bold text-[#2563eb] cursor-pointer">
                        Vinit Shah
                    </span>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleMenuClick(item)} // use the same function
                                className={`relative cursor-pointer font-medium transition-colors duration-300 group ${active === item
                                    ? "text-gray-900"
                                    : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {item}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded transition-all duration-300 ease-in-out ${active === item ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                ></span>
                            </li>
                        ))}
                    </ul>


                    {/* Mobile Hamburger Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Removed the close button inside drawer */}

                    {/* Mobile Menu Items */}
                    <ul className="flex flex-col gap-6 px-6 text-lg font-medium mt-6">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleMenuClick(item)}
                                className={`cursor-pointer ${active === item
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Optional: Footer inside drawer */}
                    <div className="mt-auto p-6 text-sm text-gray-500">
                        © {new Date().getFullYear()} Vinit Shah
                    </div>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-blue-50 bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                ></div>
            )}
        </>
    );
};

export default Navbar;
