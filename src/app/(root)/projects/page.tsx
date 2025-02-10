"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { constructionProjects, designProjects } from "@/lib/exports";

type Project = {
    id: number;
    title: string;
    description: string;
    Contract: string;
    Client: string;
    YearOfAccomplishment: string;
    images: string[];
};


const PastProjects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentImageIndex, setCurrentImageIndex] = useState<{
        [key: number]: number;
    }>({});
    const projectsPerPage = 6;
    const router = useRouter();

    const projects: Project[] =
        activeProject === 1 ? constructionProjects : designProjects;
    const totalPages: number = Math.ceil(projects.length / projectsPerPage);
    const paginatedProjects: Project[] = projects.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    const handleNextImage = (projectId: number, images: string[]) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % images.length,
        }));
    };

    return (
        <div className="font-sans py-6 px-4 sm:px-6 lg:px-8 xl:px-12 lg:pb-24">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl uppercase text-gray-800 font-extrabold tracking-tight">
                        Latest Projects
                    </h2>
                    <div className="flex flex-row justify-between items-center">
                        <button
                            onClick={() => setActiveProject(1)}
                            className={`px-12 py-2 rounded-md font-semibold transition-all ${
                                activeProject === 1
                                    ? "bg-red-800 text-white"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                            }`}
                        >
                            Construction Projects
                        </button>
                        <button
                            onClick={() => setActiveProject(2)}
                            className={`px-12 py-2 rounded-md font-semibold transition-all ${
                                activeProject === 2
                                    ? "bg-red-800 text-white"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                            }`}
                        >
                            Design Projects
                        </button>
                    </div>
                </div>

                {/* Projects List */}
                <div className="grid gap-6 md:gap-8">
                    {paginatedProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className={`flex flex-col ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Image Section */}
                                <div className="md:w-1/2 relative aspect-video md:aspect-square">
                                    <Image
                                        src={
                                            project.images[
                                                currentImageIndex[project.id] ||
                                                    0
                                            ]
                                        }
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-opacity duration-500"
                                    />
                                    <button
                                        className="absolute top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNextImage(
                                                project.id,
                                                project.images
                                            );
                                        }}
                                    >
                                        ▶
                                    </button>
                                </div>
                                {/* Content Section */}
                                <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-3">
                                        {project.description}
                                    </p>
                                    <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                                        <span className="font-semibold">
                                            Contract#:{" "}
                                        </span>
                                        {project.Contract}
                                    </p>
                                    <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                                        <span className="font-semibold">
                                            Client:{" "}
                                        </span>{" "}
                                        {project.Client}
                                    </p>
                                    <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                                        <span className="font-semibold">
                                            Accomplishment Year:{" "}
                                        </span>{" "}
                                        {project.YearOfAccomplishment}
                                    </p>
                                    <button
                                        className="mt-3 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-secondary capitalize text-white mb-1 hover:bg-red-500 cursor-pointer"
                                        onClick={() =>
                                            router.push(
                                                `/projects/${project.id}`
                                            )
                                        }
                                    >
                                        Read more ...
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-700 disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="px-4 py-2 mx-2 text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-700 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PastProjects;
