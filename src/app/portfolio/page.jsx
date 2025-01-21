"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import LatestProjects from "@/components/latest-projects";

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
                    className="text-white uppercase text-[40px] font-bold text-center"
                >
                    Latest Projects
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="px-12 lg:px-36 xl:px-48 text-[18px] text-gray-500 text-center"
                >
                    The team at Global Gate deliver a full range of Military,
                    Infrastructure and Civil construction services through a
                    commitment to forging lasting relationships and a dedication
                    to quality as well as safety first policy. Our objective is
                    to “make a positive difference” – not only through the
                    quality of built results, but also through collaboration and
                    implementation of leading methodologies. We are proud to
                    support our Afghan National Army and Police through our
                    services.
                </motion.div>
                <motion.div
                    variants={slideUpVariants}
                    className="w-96 h-[6px] bg-secondary"
                ></motion.div>
            </motion.div>
            <motion.div
                variants={zoomInVariants}
                initial="hidden"
                whileInView={"visible"}
                className="lg:w-[80%] w-[90%] m-auto pb-[60px] flex flex-col justify-between items-center gap-[20px]"
            >
                <LatestProjects /> 
            </motion.div>
        </div>
    );
};

export default PortfolioPage;
