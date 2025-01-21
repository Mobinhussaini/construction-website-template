"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const HeaderPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItem = [
        { link: "Home", path: "home", href: "/" },
        { link: "Who we are", path: "about", href: "/who-we-are" },
        { link: "What we do", path: "services", href: "/what-we-do" },
        { link: "Projects", path: "projects", href: "/projects" },
        { link: "Contact", path: "contact", href: "/contact" },
    ];

    const handleClick = (href) => {
        router.push(href);
    };

    return (
        <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky -top-1 z-50 shadow-md ">
            {/* <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
                Prime <span className="text-secondary italic">Structure</span>
            </h1> */}
            <Link href="/">
                <Image
                    src={"/global/logo.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="text-black md:text-4xl text-3xl font-bold font-rubik ml-12 lg:ml-36"
                />
            </Link>

            <ul className="lg:flex justify-center items-center gap-6 hidden">
                {navItem.map(({ link, path, href }) => (
                    <Link
                        key={path}
                        className="text-black  uppercase font-semibold cursor-pointer p-3 rounded-full hover:border-b hover:border-secondary text-[14px] tracking-wider"
                        link={path}
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick(href)}
                    >
                        {link}
                    </Link>
                ))}
            </ul>
            <button className="bg-secondary text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">
                Reach us
            </button>

            {/* Mobile Menu start */}

            <div
                className="flex justify-between items-center lg:hidden mt-3"
                onClick={toggleMenu}
            >
                <div>
                    {isMenuOpen ? (
                        <FaXmark className="text-secondary text-3xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-secondary text-3xl cursor-pointer" />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } w-full h-fit bg-secondary p-4 absolute top-[72px] left-0`}
                onClick={closeMenu}
            >
                <ul className="flex flex-col justify-center items-center gap-2 w-full">
                    {navItem.map(({ link, path }) => (
                        <Link
                            key={path}
                            className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default HeaderPage;
