import ServiceItemList from "@/app/services/ServiceItemList";
import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
    return (
        <div className="w-full mx-auto text-black text-sm">
            {/* Architecture, Design & Value Engineering */}
            <div className="py-12 px-4 sm:px-10  bg-gray-50 pt-24">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid lg:grid-cols-2 items-center gap-10 ">
                        <div className="text-justify">
                            <h2 className="text-4xl font-semibold mb-6">
                                Architecture, Design & Value Engineering
                            </h2>
                            <p className="text-base lg:text-lg leading-relaxed ">
                                Inside the Global Gate studio, we share a belief
                                in the transformational power of people united
                                in a common purpose. Our goal is to create
                                places that draw people together, serve, and
                                inspire.
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed ">
                                This belief manifests itself in collaboration.
                                That means ongoing communication in the studio
                                and with our design team, a lack of ego from the
                                top down, and a collection of highly-capable,
                                enthusiastic design professionals. Our staff are
                                all exceptional designers and, rare within the
                                profession, the majority are registered
                                architects. Collaboration extends beyond the
                                studio to embrace our clients. With each
                                commission we actively engage our clients and
                                listen attentively to uncover the unique
                                qualities of their project and site. The aim of
                                this effort is to reveal not only the client’s
                                top-of-mind goals, but also latent functional
                                and aspirational goals, as these often determine
                                the real success of a project.
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed ">
                                Our portfolio is evidence of this empathetic
                                focus, rarely repeating a style, strategy, or
                                solution from one project to the next. Clients
                                tell us they value our ability to create designs
                                that reflect their unique needs and personality.
                            </p>
                            <p className="text-base lg:text-lg leading-relaxed ">
                                From military bases and force protection
                                projects to commercial works and homes, we have
                                earned a reputation for timeless design and an
                                expertise in tackling unusual projects. These
                                qualities and sustained design excellence caused
                                Global Gate to collect and team up the most
                                experienced and qualified designers of the
                                country. A summary of the design projects which
                                our team have completed so far are presented in
                                this chart.
                            </p>
                            <Link
                                href="/contact"
                                className="bg-secondary mt-6 lg:mt-16 text-white px-12 w-full py-3 mx-auto rounded-md justify-center items-center text-xl font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex "
                            >
                                Reach Us
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="text-center bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-secondary w-12 inline-block bg-gray-50 p-3 rounded-full"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                                        data-original="#000000"
                                    />
                                </svg>
                                <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-2 mb-2 text-secondary uppercase">
                                    Design
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    The project consists of the design,
                                    renovation, re-adaption and construction of
                                    an upgraded garrison’s facilities for the
                                    Afghanistan National Army’s use at
                                    Pol-e-Charkhi Garrison in Afghanistan to
                                    include: Capital Division, 2nd Brigade, 1st,
                                    2nd, and 3rd Kandak; Corps Support Kandak,
                                    CSS Kandak, 2nd Brigade Garrison Support
                                    Unit, 2nd Brigade Headquarters; and Route
                                    Clearance Company.
                                </p>
                            </div>
                            <div className="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 inline-block bg-gray-50 p-3 rounded-full"
                                    viewBox="0 0 682.667 682.667"
                                >
                                    <defs>
                                        <clipPath
                                            id="a"
                                            clipPathUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M0 512h512V0H0Z"
                                                data-original="#000000"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g
                                        fill="none"
                                        className="stroke-secondary"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="40"
                                        clipPath="url(#a)"
                                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                    >
                                        <path
                                            d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M178 271.894 233.894 216 334 316.105"
                                            data-original="#000000"
                                        />
                                    </g>
                                </svg>
                                <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-2 mb-2 text-secondary uppercase">
                                    Security
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    The project consists of design and
                                    construction of upgrades to the existing
                                    South Kabul Afghanistan International
                                    Airport Garrison water supply, sanitary
                                    sewer including wastewater treatment
                                    facilities (WWTP), and electrical utilities
                                    for the Afghan National Army (ANA) in Kabul
                                    District, Kabul Province, Afghanistan.
                                </p>
                            </div>
                            <div className="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-secondary w-12 inline-block bg-gray-50 p-3 rounded-full"
                                    viewBox="0 0 512.001 512.001"
                                >
                                    <path
                                        d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                                        data-original="#000000"
                                    />
                                </svg>
                                <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-2 mb-2 text-secondary uppercase">
                                    Support
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    The project consists of the design and
                                    construction of a 48.76 meters (160 feet) by
                                    50.29 meters (165 feet) aircraft hangar for
                                    the Afghan National Army – Air Corps
                                    Detachment/Afghan Air Force (AAF), in Kabul
                                    Province, Afghanistan. The hangar shall have
                                    a minimum eave height of 6.4 meters (21
                                    feet).
                                </p>
                            </div>
                            <div className="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-secondary w-12 inline-block bg-gray-50 p-3 rounded-full"
                                    viewBox="0 0 24 24"
                                >
                                    <g fillRule="evenodd" clipRule="evenodd">
                                        <path
                                            d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                                            data-original="#000000"
                                        />
                                    </g>
                                </svg>
                                <h3 className="text-base md:text-xl lg:text-2xl font-semibold mt-2 mb-2 text-secondary uppercase">
                                    Performance
                                </h3>
                                <p className="text-sm text-gray-500 text-justify">
                                    The project consists of design and
                                    construction of upgrades to the existing
                                    South Kabul Afghanistan International
                                    Airport Garrison water supply, sanitary
                                    sewer including wastewater treatment
                                    facilities (WWTP), and electrical utilities
                                    for the Afghan National Army (ANA) in Kabul
                                    District, Kabul Province, Afghanistan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceItemList />

            <div className="py-12 px-4 sm:px-10 bg-gray-50">
                <div className="px-24 lg:px-36 relative h-full max-w-5xl text-justify mx-auto flex flex-col justify-center items-center py-16">
                    <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                        We are glade to see you
                    </h2>
                    <p>
                        The team at Global Gate deliver a full range of
                        Military, Infrastructure and Civil construction services
                        through a commitment to forging lasting relationships
                        and a dedication to quality as well as safety first
                        policy. Our objective is to “make a positive difference”
                        – not only through the quality of built results, but
                        also through collaboration and implementation of leading
                        methodologies. We are proud to support our Afghan
                        National Army and Police through our services.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-secondary mt-6 lg:mt-16 text-white px-12 w-full py-3 mx-auto rounded-md justify-center items-center text-xl font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex "
                    >
                        Reach Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
