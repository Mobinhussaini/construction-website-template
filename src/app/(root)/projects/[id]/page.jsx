"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import LoadingComponent from "@/components/loading";

const ProjectDetails = () => {
    const router = useRouter();
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetchProjects();
    }, [id, router]);

    const fetchProjects = async () => {
        try {
            // Fetch the project data from the API
            const response = await fetch(`/api/projects/${id}`);

            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error("Failed to fetch projects");
            }

            // Parse the JSON response
            const project = await response.json();


            console.log("SELECTED PROJECT ", project)

            if (project) {
                // Set the project state with the selected project
                setProject(project);
            } else {
                // Redirect to 404 page if the project is not found
                router.push("/404");
            }
        } catch (error) {
            console.error("Error fetching projects:", error);
            router.push("/404"); // Optionally handle error by redirecting
        }
    };

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

    if (!project) return <LoadingComponent />;

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
