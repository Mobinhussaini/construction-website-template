"use client";
import React from "react";
import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";

const FooterPage = () => {
    return (
        <>
            <div className="bg-primary text-white flex justify-center items-center gap-2 p-5">
                <FaCopyright className="fill-yellow-500 lg:size-5 size-8" />
                <p className="text-lg text-center">
                    Copyright 2025, Rubik Company, All Rights Reserved
                </p>
            </div>

            {/* scroll to top  */}
            <div
                id="icon-box"
                className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 right-6 bottom-6"
            >
                <Link to="hero" spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className="size-6" />
                </Link>
            </div>
        </>
    );
};

export default FooterPage;
