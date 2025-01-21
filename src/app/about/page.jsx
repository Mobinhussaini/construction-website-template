"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div
            className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
            id="about"
        >
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={slideUpVariants}
                className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-6"
            >
                <motion.h1
                    variants={slideUpVariants}
                    className="text-yellow-500 text-2xl uppercase"
                >
                    Prime Construction
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[40px] font-bold"
                >
                    What We Do
                </motion.h1>
                <div className="w-[120px] h-[6px] bg-secondary"></div>
                <p className="text-3xl italic text-gray-50 mt-[60px]">
                    Global Gate is a client-driven company, offering a full
                    range of construction services.
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={slideUpVariants}
                className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
            >
                <p className="text-white text-lg text-justify">
                    Global Gate is a client-driven company, offering a full
                    range of construction services, including Design and Build,
                    Value Engineering with Guaranteed Maximum Price and Early
                    Contractor Involvement, as well as the more traditional
                    forms of contract meeting both local and international
                    needs. Our commitment on all projects is to deliver total
                    client satisfaction, a faultless Health and Safety record
                    and strict attention to both budget and timescales. Often
                    needing to integrate the needs of the project with the
                    day-to-day lives of residents and existing businesses is
                    part of our extensive pre-project planning, involving
                    consultation with all affected parties to ensure positive
                    outcomes.
                </p>
                <motion.button
                    variants={zoomInVariants}
                    className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black uppercase"
                >
                    <Link href={"/what-we-do"}>read more</Link>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default AboutPage;
