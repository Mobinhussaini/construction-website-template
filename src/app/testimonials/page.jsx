"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import { clients } from "@/lib/exports";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
                    className="text-white uppercase text-[40px] font-bold text-center"
                >
                    Client, Business Partners & Supplies
                </motion.h1>
                <motion.div
                    variants={slideUpVariants}
                    className="w-96 h-[6px] bg-secondary"
                ></motion.div>
                <motion.div
                    variants={zoomInVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    className="lg:w-full w-[80%] mt-[30px]"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {clients.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="bg-primary rounded-md py-24 hover:bg-secondary cursor-pointer pb-[100px] pt-[30px]">
                                        <p className="text-white hover:text-black text-lg text-center mx-8 lg:mx-12">
                                            {item.about}
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-[5px]">
                                        <Image
                                            className="mt-[-50px] w-[100px] h-[100px] rounded-full"
                                            width={100}
                                            height={100}
                                            src={item.image}
                                            alt="clients"
                                        />
                                        <h1 className="text-white text-[22px]">
                                            {item.post}
                                        </h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TestimonialsPage;
