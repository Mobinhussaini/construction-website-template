"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

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
                        For any inquiry, quotation, or suggestion, please write
                        to us using below form:
                    </p>
                    <motion.div className="flex flex-row justify-between items-center gap-3">
                        <motion.h1
                            variants={slideUpVariants}
                            className="text-black flex flex-row justify-between items-center gap-1 text-base font-bold"
                        >
                            <FaLocationDot />
                            Address:
                        </motion.h1>
                        <motion.p className="text-base font-semibold">
                            US Address: 9405 B Lee HWY Fairfax, Fairfax VA 22031
                            United States
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row justify-between items-center gap-3 ">
                        <motion.h1
                            variants={slideUpVariants}
                            className="text-black flex flex-row justify-between items-center gap-1 text-base font-bold"
                        >
                            <BiPhoneCall />
                            Phone:
                        </motion.h1>
                        <motion.p className="text-base font-semibold">
                            US Contact No. 1-571-398-7100 , 1-571- 376-3633
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row justify-between items-center gap-3">
                        <motion.h1
                            variants={slideUpVariants}
                            className="text-black flex flex-row justify-between items-center gap-1 text-base font-bold"
                        >
                            <MdEmail />
                            Email:
                        </motion.h1>
                        <motion.p className="text-base font-semibold hover:text-blue-600 hover:underline hover:cursor-pointer">
                            info@globalgategroup.org 
                        </motion.p>
                        <motion.p className="text-base font-semibold hover:text-blue-600 hover:underline hover:cursor-pointer">
                            bod@globalgategroup.org
                        </motion.p>
                    </motion.div>
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
