"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/sections/animation";
import { allservices } from "@/lib/exports";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceItemList = () => {

   const router = useRouter();

      const handleServiceItemDetails = (id: string) => {
        router.push(`/services/${id}`);
      };

    return (
        <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]">
            <motion.h1
                variants={slideUpVariants}
                className="text-secondary text-3xl uppercase font-bold tracking-widest "
            >
                Our Services
            </motion.h1>
            <motion.div
                variants={slideUpVariants}
                className="w-42 md:w-96 h-1 mt-6 bg-secondary"
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
                        className="flex justify-center items-start gap-5 p-8 cursor-pointer"
                        key={index}
                        onClick={()=>handleServiceItemDetails(service.id)}
                    >
                        <Image
                            src={service.icon}
                            alt={service.title}
                            width={120}
                            height={120}
                            className="w-24 cursor-pointer border-2 border-secondary hover:shadow-md hover:shadow-secondary rounded-lg p-2"
                            />
                        <div className="flex flex-col justify-center items-start gap-3">
                            <h1 className="text-xl font-bold text-black">
                                {service.title}
                            </h1>
                            <p className="text-[18px]">
                                {service.about.length > 60
                                    ? `${service.about.substring(0, 60)}...`
                                    : service.about}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceItemList;
