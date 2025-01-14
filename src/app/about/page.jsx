"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";

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
                    welcome to
                </motion.h1>
                <motion.h1
                    variants={slideUpVariants}
                    className="text-white uppercase text-[40px] font-bold"
                >
                    Prime Construction
                </motion.h1>
                <div className="w-[120px] h-[6px] bg-yellow-500"></div>
                <p className="text-3xl italic text-gray-50 mt-[60px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias omnis accusamus veritatis sint, repellat quidem?
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={slideUpVariants}
                className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
            >
                <p className="text-white text-lg text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, distinctio, voluptatem molestias iure maiores minus
                    fuga minima odit inventore, amet ratione accusamus?
                    Consequuntur at odit odio sed repellat necessitatibus
                    labore, facilis corrupti tenetur vero voluptates sint,
                    aspernatur sapiente ratione maxime sunt. Illo, quam dolorum
                    corporis voluptates assumenda perspiciatis numquam. Atque
                    doloribus praesentium aliquam, cum modi maxime omnis
                    reprehenderit illum, rem excepturi consequatur libero nobis
                    quisquam asperiores quibusdam quos voluptatum ipsa quas
                    alias harum? Aperiam sint, animi delectus at blanditiis
                    repudiandae rerum odit porro iste natus necessitatibus amet
                    error sapiente magnam, eveniet fugit nisi! Fuga quisquam
                    minima esse amet asperiores doloribus, quia vero ratione
                    nesciunt, nobis beatae velit dicta libero mollitia
                    perferendis. Alias, culpa maiores? Voluptatum molestiae
                    culpa modi consequatur qui.
                </p>
                <motion.button
                    variants={zoomInVariants}
                    className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black uppercase"
                >
                    read more
                </motion.button>
            </motion.div>
        </div>
    );
};

export default AboutPage;
