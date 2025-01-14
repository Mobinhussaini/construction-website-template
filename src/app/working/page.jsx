"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import { planning } from "@/lib/exports";

const WorkingPage = () => {
    return (
        <div className="w-full bg-white" id="working">
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
                    step by step
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-black uppercase text-[40px] font-bold text-center"
                >
                    How it's working
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="w-[120px] h-[6px] bg-yellow-500"
                ></motion.div>
                <motion.div
                    variants={zoomInVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-[20px]  mt-[30px]"
                >
                    {planning.map((item, index) => (
                        <div
                            className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6"
                            key={index}
                        > 
                          <div>
                            <item.icon className="size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
                          </div>
                          <h1 className="text-2xl font-bold uppercase">{item.title} </h1>
                          <p className="text-[20px] text-center text-gray-600" >{item.about}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorkingPage;
