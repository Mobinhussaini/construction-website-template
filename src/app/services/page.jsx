"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";

import { managementPrimses } from "@/lib/exports";
import ServiceItemList from "./ServiceItemList";

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
                    className="text-black uppercase text-[40px] font-bold text-center"
                >
                    Who We Are
                </motion.h1>
                <motion.h3
                    variants={slideUpVariants}
                    className="text-black uppercase text-[24px] font-bold text-center"
                >
                    Energy And Experience – The Best Of Both Worlds
                </motion.h3>
                <motion.div
                    variants={slideUpVariants}
                    className="px-12 lg:px-36 xl:px-48 text-[18px] text-gray-500 text-center"
                >
                    Established in 2006, we see ourselves as wise heads on young
                    shoulders, with many of our key team members serving the
                    construction industry for more than 25 years. GLOBAL GATE
                    offers a team that not only has outstanding technical
                    skills, but also one with the professionalism and management
                    experience expected of a leading construction management
                    company.
                </motion.div>
                <motion.div
                    variants={slideUpVariants}
                    className="w-96 h-1 mt-6 bg-secondary"
                ></motion.div>
                 <motion.div
                    variants={zoomInVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-[20px]"
                >
                    {managementPrimses.map((statement, index) => (
                        <motion.div
                            variants={zoomInVariants}
                            className="flex justify-center items-start gap-5 lg:ml-24 p-8"
                            key={index}
                        >
                            <div className="flex flex-col justify-center items-start gap-3">
                                <h1 className="text-3xl font-bold text-black">
                                    {statement.title}
                                </h1>
                                <p className="text-[18px] text-justify">{statement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
               <ServiceItemList/>
            </motion.div>
        </div>
    );
};

export default ServicesPage;
