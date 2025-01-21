"use client";

import React from "react";
import { zoomInVariants, slideUpVariants } from "@/sections/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/exports"; // Replace with your actual project data source
import Link from "next/link";

const LatestProjects = () => {
    return (
        <div className="px-4 lg:px-16 text-primary text-center">
            <div className="relative">
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  justify-center">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            variants={slideUpVariants}
                            className="bg-white rounded-md shadow-lg"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={620}
                                height={360}
                                className="w-[320px object-cover rounded-t-md"
                            />
                            <motion.div
                                variants={slideUpVariants}
                                className="px-4 py-2  top-[240px]"
                            >
                                <h3 className="text-gray-600 text-lg font-bold">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 text-start ml-3 text-sm">
                                    <strong>Client:</strong> {project.client}
                                </p>
                                <p className="text-gray-600 text-start ml-3 text-sm">
                                    <strong>Contract No:</strong>{" "}
                                    {project.contractNo}
                                </p>
                                <p className="text-gray-600 text-start ml-3 text-sm">
                                    <strong>Finished Date:</strong>{" "}
                                    {project.finishedDate}
                                </p>
                                <p className="text-gray-600 text-start ml-3 text-sm my-2">
                                    {project.description.length > 60
                                        ? `${project.description.substring(
                                              0,
                                              60
                                          )}...`
                                        : project.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12">
                <Link
                    className="mt-12 lg:mt-24 bg-secondary hover:bg-red-800 text-xl px-24 rounded-md py-3 text-white"
                    href={"/projects"}
                >
                    View All Projects
                </Link>
            </div>
        </div>
    );
};

export default LatestProjects;
