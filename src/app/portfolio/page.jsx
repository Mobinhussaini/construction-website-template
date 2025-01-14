"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import Image from "next/image";

const PortfolioPage = () => {
    return (
        <div className="w-full" id="projects">
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
                    Portfolio
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[40px] font-bold text-center"
                >
                    Our best projects
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="w-[120px] h-[6px] bg-yellow-500"
                ></motion.div>
            </motion.div>
            <motion.div
                variants={zoomInVariants}
                initial="hidden"
                whileInView={"visible"}
                className="w-full m-auto grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1"
            >
                <Image
                    src={"/assets/project1.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project2.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project3.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project4.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project5.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project6.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project7.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
                <Image
                    src={"/assets/project8.jpg"}
                    alt="project title"
                    width={300}
                    height={300}
                    className="h-[250px] w-full"
                />
            </motion.div>
        </div>
    );
};

export default PortfolioPage;
