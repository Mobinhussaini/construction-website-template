"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
const HeroPage = () => {
    return (
        <div 
            id="hero"
            className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/homeimg.webp')" }}
        >
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={slideUpVariants}
                className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
            >
                <motion.h1
                    className="text-white uppercase text-[50px] font-bold"
                    variants={slideUpVariants}
                >
                    Making a positive difference
                </motion.h1>
                <div className="w-[120px] h-[6px] bg-secondary"></div>
                <p className="text-white text-[20px]">
                    Our primary objective is to "Make a positive difference". We recognize that this can only be achieved through the best people, using leading methodologies and systems to deliver the highest quality of build results. 
                </p>
                <p className="text-white text-[20px]">
                    It is this balance of great people, sound planning and time-proven process that enables Global Gate to deliver on our promises to our clients, staff and industry partners.  
                </p>
                <motion.div
                    initial="hidden"
                    variants={zoomInVariants}
                    whileInView={"visible"}
                    className="flex justify-center items-center gap-5"
                >
                    <motion.button
                        variants={zoomInVariants}
                        className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold uppercase"
                    >
                        read more
                    </motion.button>
                    <motion.button
                        variants={zoomInVariants}
                        className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold uppercase"
                    >
                        Reach us
                    </motion.button>
                </motion.div>
            </motion.div>
            <div className="w-[40%] flex flex-col justify-end items-end">
                <motion.img
                    initial="hidden"
                    variants={zoomInVariants}
                    whileInView={"visible"}
                    src="/assets/heroimg.png"
                    alt="Hero Image "
                    className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
                />
            </div>
        </div>
    );
};

export default HeroPage;
