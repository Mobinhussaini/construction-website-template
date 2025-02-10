"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { constructionProjects, designProjects } from "@/lib/exports";
import { BiArrowBack } from "react-icons/bi";

type Project = {
    id: number;
    title: string;
    Contract: string;
    Client: string;
    YearOfAccomplishment: string;
    description: string;
    images: string[];
};

const ProjectDetails: React.FC = () => {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    console.log(id);

    useEffect(() => {
        const allProjects = [...constructionProjects, ...designProjects];
        const selectedProject = allProjects.find((proj) => proj.id === id);
        if (selectedProject) {
            setProject(selectedProject);
        } else {
            router.push("/404"); // Redirect if project is not found
        }
    }, [id, router]);

    const handleNextImage = () => {
        if (project) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const handlePrevImage = () => {
        if (project) {
            setCurrentImageIndex(
                (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
            );
        }
    };

    if (!project)
        return (
            <p className="text-center text-gray-600">
                Loading project details...
            </p>
        );

    return (
        <div className="max-w-6xl mx-auto py-8 px-6 bg-white sm:px-6 lg:px-8">
            <div className="flex flex-row gap-6 items-center mb-6 cursor-pointer">
                <button
                    onClick={() => router.push("/projects")}
                    className="transition-colors duration-200 text-3xl font-bold hover:bg-gray-100 text-secondary"
                >
                    <BiArrowBack />
                </button>
                <h2 className="text-3xl font-bold text-secondary">
                    {project.title}
                </h2>
            </div>
            <div className="flex flex-row w-full bg-gray-200 mb-4 py-[1px]"></div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                <button
                    className="absolute top-1/2 left-4 bg-gray-800 text-white p-2 rounded-full"
                    onClick={handlePrevImage}
                >
                    ◀
                </button>
                <button
                    className="absolute top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full"
                    onClick={handleNextImage}
                >
                    ▶
                </button>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">
                {project.description}
            </p>
            <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-3">
                {project.description}
            </p>
            <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                <span className="font-semibold">Contract#: </span>
                {project.Contract}
            </p>
            <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                <span className="font-semibold">Client: </span> {project.Client}
            </p>
            <p className="text-gray-800 text-xs lg:text-base leading-relaxed px-3 py-2 rounded-sm bg-gray-50 mb-1 hover:bg-gray-100">
                <span className="font-semibold">Accomplishment Year: </span>{" "}
                {project.YearOfAccomplishment}
            </p>
        </div>
    );
};

export default ProjectDetails;
