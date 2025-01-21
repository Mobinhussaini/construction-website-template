"use client";
import Image from "next/image";
import React, { useState } from "react";
import { pastProjects } from "@/lib/exports";

const ITEMS_PER_PAGE = 10; // Number of projects per page

const PastProjects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(pastProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = pastProjects.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="font-sans py-6 px-12 lg:pb-24">
            <div className="mx-auto px-4">
                <div className="text-center lg:mb-10">
                    <h2 className="text-4xl xl:text-5xl uppercase text-gray-800  font-extrabold tracking-wide">
                        Latest Projects
                    </h2>
                    <p className="text-gray-500  mt-3 text-xl max-w-2xl mx-auto">
                        Explore our latest projects, where creativity meets
                        innovation.
                    </p>
                </div>
                <div className="grid gap-1">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index + startIndex}
                            className={`flex flex-col  justify-center lg:flex-row items-center  ${
                                (index + startIndex) % 2 === 0
                                    ? "md:flex-row bg-white"
                                    : "md:flex-row-reverse bg-gray-100"
                            } p-6 rounded-lg shadow-lg`}
                        >
                            {/* Image Carousel */}
                            <div className="lg:w-1/3 md:w-1/2 min-h-[420px] relative">
                                <ImageCarousel
                                    images={project.images}
                                    title={project.title}
                                />
                            </div>
                            {/* Content Section */}
                            <div className="lg:w-1/3 md:w-1/2 md:px-8 -mt-60 md:-mt-10">
                                <h3 className="text-gray-800  text-xl lg:text-2xl font-bold mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-800  text-sm lg:text-base">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8 space-x-2">
                        {Array.from({ length: totalPages }).map(
                            (_, pageIndex) => (
                                <button
                                    key={pageIndex}
                                    onClick={() =>
                                        handlePageChange(pageIndex + 1)
                                    }
                                    className={`px-4 py-2 rounded-md border ${
                                        currentPage === pageIndex + 1
                                            ? "bg-gray-800 text-white"
                                            : "bg-white text-gray-800  border-gray-300"
                                    } hover:bg-gray-600 hover:text-white transition`}
                                >
                                    {pageIndex + 1}
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// Image Carousel Component
const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({
    images,
    title,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            {/* Main Carousel Image */}
            <Image
                width={1200}
                height={720}
                alt={title}
                src={images[currentIndex]}
                className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
            />
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black px-2 py-[2px] rounded-full shadow hover:bg-gray-600 hover:text-white"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black px-2 py-[2px] rounded-full shadow hover:bg-gray-600 hover:text-white"
            >
                &gt;
            </button>
            {/* Thumbnails */}
            <div className="flex justify-center items-center gap-2 mt-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`cursor-pointer  rounded-md ${
                            index === currentIndex
                                ? "border-gray-300"
                                : "border-transparent"
                        }`}
                    >
                        <Image
                            width={100}
                            height={60}
                            alt={`${title} thumbnail ${index + 1}`}
                            src={img}
                            className="w-20 h-12 object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PastProjects;
