"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";

import { allservices } from "@/lib/exports";
import Image from "next/image";

const ServicesPage = () => {
    return (
        <div className="w-full bg-white" id="services">
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={slideUpVariants}
                className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
            >
                <motion.h1
                    variants={slideUpVariants}
                    className="text-yellow-500 text-2xl uppercase"
                >
                    Special Offer
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-black uppercase text-[40px] font-bold text-center"
                >
                    Our best services
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="w-[120px] h-[6px] bg-yellow-500"
                ></motion.div>
                <motion.div
                    variants={zoomInVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-[20px]  mt-[30px]"
                >
                    {allservices.map((service, index) => (
                        <motion.div
                            variants={zoomInVariants}
                            className="flex justify-center items-start gap-5 p-8"
                            key={index}
                        >
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={30}
                                height={30}
                                className="w-[60px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2"
                            />
                            <div className="flex flex-col justify-center items-start gap-3">
                                <h1 className="text-xl font-bold text-black">
                                    {service.title}
                                </h1>
                                <p className="text-[18px]">{service.about}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ServicesPage;
