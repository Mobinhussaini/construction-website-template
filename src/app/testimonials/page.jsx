"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import { clients } from "@/lib/exports";
import Image from "next/image";

const TestimonialsPage = () => {
    return (
        <div className="w-full" id="clients">
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
                    Testimonials
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[40px] font-bold text-center"
                >
                    What our clients say
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="w-[120px] h-[6px] bg-yellow-500"
                ></motion.div>
                <motion.div
                    variants={zoomInVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    className="lg:w-full w-[90%] grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-[20px]  mt-[30px]"
                >
                    {clients.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                          <div className="border-2 border-white hover:bg-yellow-500 pb-[100px] pt-[30px]">
                            <p className="text-white hover:text-black text-lg text-center mx-8 lg:mx-12">{item.about}</p>
                          </div>
                          <div className="flex flex-col justify-center items-center gap-[5px]">
                            <Image className="mt-[-50px] w-[100px] h-[100px] rounded-full" width={100} height={100} src={item.image} alt="clients" /> 
                            <h1 className="text-white text-[27px] font-semibold uppercase">{item.name}</h1>
                            <h1 className="text-yellow-500 text-[22px]">{item.post}</h1>
                          </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TestimonialsPage;
