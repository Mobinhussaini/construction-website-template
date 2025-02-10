"use client";
import React from "react";
import { motion } from "framer-motion";
import { allservices } from "@/lib/exports";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { BiLeftArrowAlt } from "react-icons/bi";

const IDpage = () => {
    const params = useParams();
    const service = allservices.find((s) => s.id === params.id);
    const router = useRouter();

    if (!service) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold text-red-500 p-8 bg-white rounded-lg shadow-lg"
                >
                    Service Not Found
                </motion.p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50"
        >
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-secondary to-primary text-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <button
                        className="text-white mb-3 md:-ml-24 lg:-ml-36 hover:text-primary text-3xl"
                        onClick={() => router.push("/what-we-do")}
                    >
                        <BiLeftArrowAlt
                            size={36}
                            className="border-b hover:border-primary "
                        />
                    </button>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {service.title}
                    </motion.h1>
                    <p className="text-xl opacity-90 max-w-2xl">
                        {service.title}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`bg-white p-8 rounded-2xl shadow-lg grid ${
                        service.items ? "lg:grid-cols-3" : "lg:grid-cols-2"
                    }  gap-8`}
                >
                    <Image
                        src={service.icon}
                        alt={service.title}
                        width={800}
                        height={450}
                        className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    />
                    <div className="mt-8 space-y-6 text-justify">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Service Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                    {service.items && (
                        <div className="space-y-6 mt-8 text-justify">
                            {service.items?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default IDpage;
