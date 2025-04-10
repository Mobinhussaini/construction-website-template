"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { formatDate } from "@/lib/utls";
import LoadingComponent from "@/components/loading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PastProjects = () => {
    const [activeProjectType, setActiveProjectType] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [thumbsSwiperMap, setThumbsSwiperMap] = useState({});

    const projectsPerPage = 6;

    // Categorize projects into construction and design
    const [constructionProjects, designProjects] = useMemo(() => {
        return allProjects.reduce(
            ([construction, design], project) => {
                if (project.type === 1) construction.push(project);
                else if (project.type === 2) design.push(project);
                return [construction, design];
            },
            [[], []]
        );
    }, [allProjects]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeProjectType]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/api/projects");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const { projects } = await response.json();
                setAllProjects(projects);
                setCurrentImageIndex({});
            } catch (error) {
                console.error("Fetch error:", error);
                setError("Failed to load projects. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Get current category's projects and pagination
    const { currentProjects, totalPages } = useMemo(() => {
        const projects =
            activeProjectType === 1 ? constructionProjects : designProjects;
        const start = (currentPage - 1) * projectsPerPage;
        return {
            currentProjects: projects.slice(start, start + projectsPerPage),
            totalPages: Math.ceil(projects.length / projectsPerPage),
        };
    }, [activeProjectType, constructionProjects, designProjects, currentPage]);

    const handleNextImage = (projectId, images) => {
        setCurrentImageIndex((prev) => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % images.length,
        }));
    };

    if (error) {
        return (
            <div className="text-center py-8 text-red-500">
                {error}
                <button
                    onClick={() => window.location.reload()}
                    className="ml-4 px-4 py-2 bg-red-100 rounded hover:bg-red-200"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (isLoading) {
        return <LoadingComponent />;
    }

    return (
        <div className="font-sans py-6 px-4 sm:px-6 lg:px-8 xl:px-12 lg:pb-24">
            <div className="mx-auto max-w-7xl">
                <header className="text-center mb-8 lg:mb-12 space-y-6">
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl uppercase text-gray-800 font-extrabold tracking-tight">
                        Latest Projects
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => setActiveProjectType(1)}
                            className={`px-6 py-2 sm:px-12 rounded-md font-semibold transition-colors ${
                                activeProjectType === 1
                                    ? "bg-red-800 text-white"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                            }`}
                        >
                            Construction Projects
                        </button>
                        <button
                            onClick={() => setActiveProjectType(2)}
                            className={`px-6 py-2 sm:px-12 rounded-md font-semibold transition-colors ${
                                activeProjectType === 2
                                    ? "bg-red-800 text-white"
                                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                            }`}
                        >
                            Design Projects
                        </button>
                    </div>
                </header>

                <div className="grid gap-6 md:gap-8">
                    {currentProjects.map((project, index) => {
                        const currentIndex = currentImageIndex[project.id] || 0;
                        const hasMultipleImages = project.images?.length > 1;

                        return (
                            <article
                                key={project.id + project.title}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div
                                    className={`flex flex-col ${
                                        index % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    }`}
                                >
                                    <div className="md:w-1/2 relative aspect-video md:aspect-square">
                                        {project.images?.length > 0 ? (
                                            <>
                                                <Swiper
                                                    spaceBetween={10}
                                                    navigation
                                                    thumbs={{
                                                        swiper:
                                                            thumbsSwiperMap[
                                                                project.id
                                                            ]?.destroyed ===
                                                            false
                                                                ? thumbsSwiperMap[
                                                                      project.id
                                                                  ]
                                                                : null,
                                                    }}
                                                    modules={[
                                                        Navigation,
                                                        Thumbs,
                                                    ]}
                                                    className="rounded-xl overflow-hidden"
                                                >
                                                    {project.images.map(
                                                        (img, i) => (
                                                            <SwiperSlide
                                                                key={i}
                                                            >
                                                                <div className="relative aspect-video md:aspect-square w-full h-full">
                                                                    <Image
                                                                        src={
                                                                            img
                                                                        }
                                                                        alt={`${
                                                                            project.title
                                                                        } - Slide ${
                                                                            i +
                                                                            1
                                                                        }`}
                                                                        fill
                                                                        className="object-cover"
                                                                        priority={
                                                                            index <
                                                                            2
                                                                        }
                                                                    />
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    )}
                                                </Swiper>

                                                <Swiper
                                                    onSwiper={(swiper) =>
                                                        setThumbsSwiperMap(
                                                            (prev) => ({
                                                                ...prev,
                                                                [project.id]:
                                                                    swiper,
                                                            })
                                                        )
                                                    }
                                                    spaceBetween={10}
                                                    slidesPerView={Math.min(
                                                        project.images.length,
                                                        5
                                                    )}
                                                    watchSlidesProgress
                                                    modules={[Thumbs]}
                                                    className="my-2 flex justify-center items-center"
                                                >
                                                    {project.images.map(
                                                        (img, i) => (
                                                            <SwiperSlide
                                                                key={`thumb-${i}`}
                                                            >
                                                                <div className="w-16 m-1 mx-auto justify-center items-center flex flex-row p-1 h-16 border rounded overflow-hidden cursor-pointer">
                                                                    <Image
                                                                        src={
                                                                            img
                                                                        }
                                                                        alt={`Thumbnail ${
                                                                            i +
                                                                            1
                                                                        }`}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    )}
                                                </Swiper>
                                            </>
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center aspect-video md:aspect-square">
                                                <span className="text-gray-400">
                                                    No images available
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm lg:text-base mb-4">
                                            {project.description}
                                        </p>
                                        <dl className="space-y-2">
                                            {[
                                                [
                                                    "Contract",
                                                    project.contract_no,
                                                ],
                                                ["Client", project.client],
                                                [
                                                    "Year",
                                                    formatDate(
                                                        project.accomplishment_date
                                                    ),
                                                ],
                                            ].map(([label, value]) => (
                                                <div
                                                    key={label}
                                                    className="text-sm lg:text-base bg-gray-50 px-3 py-2 rounded-sm"
                                                >
                                                    <dt className="font-semibold inline">
                                                        {label}:
                                                    </dt>{" "}
                                                    <dd className="inline text-gray-700">
                                                        {value || "N/A"}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {totalPages > 1 && (
                    <nav className="mt-8 flex justify-center items-center gap-4">
                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.max(p - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50 transition-colors"
                            aria-label="Previous page"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">
                            Page{" "}
                            <span className="font-semibold">{currentPage}</span>{" "}
                            of{" "}
                            <span className="font-semibold">{totalPages}</span>
                        </span>
                        <button
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(p + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50 transition-colors"
                            aria-label="Next page"
                        >
                            Next
                        </button>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default PastProjects;
