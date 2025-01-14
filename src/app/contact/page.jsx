"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";

const ContacPage = () => {
    return (
        <div className="w-full bg-white" id="contact">
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
                        Contact us
                    </motion.h1>
                    <motion.h1
                        variants={slideUpVariants}
                        className="text-black uppercase text-[40px] font-bold"
                    >
                        Reach us for any query
                    </motion.h1>
                    <div className="w-[120px] h-[6px] bg-yellow-500"></div>
                    <p className="text-3xl italic text-gray-699 text-justify mt-[60px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Alias omnis accusamus veritatis sint, repellat
                        quidem?
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={slideUpVariants}
                    className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
                >
                    <motion.form
                        initial="hidden"
                        whileInView={"visible"}
                        variants={zoomInVariants}
                        className="w-full flex flex-col justify-center items-start gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter Fullname"
                            className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
                        />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
                        />
                        <input
                            type="number"
                            placeholder="Enter Phone"
                            className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
                        />
                        <input
                            type="text"
                            placeholder="Enter Subject"
                            className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
                        />
                        <textarea
                            placeholder="Enter Message"
                            className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
                            cols={30}
                            rows={9}
                        />
                        <motion.button
                            variants={zoomInVariants}
                            className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full"
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContacPage;
