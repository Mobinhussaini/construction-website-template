import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhoWeAre = () => {
    return (
        <div className="w-full ">
            <div className="lg:min-h-[560px] bg-gray-50 px-4 sm:px-10">
                <div className="max-w-7xl w-full mx-auto py-24">
                    <div className="grid lg:grid-cols-2 justify-center items-center gap-24">
                        <div className="text-justify">
                            <h1 className=" text-4xl lg:text-6xl uppercase font-bold mb-6 md:!leading-[80px]">
                                Who we are?
                            </h1>
                            <h1 className="md:text-5xl text-4xl font-bold mb-6 md:!leading-[55px]">
                                Energy And Experience – The Best of Both Worlds
                            </h1>
                            <p className="text-base leading-relaxed">
                                Established in 2006, we see ourselves as wise
                                heads on young shoulders, with many of our key
                                team members serving the construction industry
                                for more than 25 years. Global Gate Construction
                                offers a team that not only has outstanding
                                technical skills, but also one with the
                                professionalism and management experience
                                expected of a leading construction management
                                company.
                            </p>
                            <p className="text-base leading-relaxed">
                                These attributes, coupled with the boutique
                                quality of having direct access to the business
                                owners, means that we are able to offer a
                                tailored, high-quality and high-value service to
                                the industry. This fresh, leading-edge approach
                                to construction management is supported by the
                                numerous industry awards bestowed upon our
                                people. Global Gate Construction works
                                throughout the country, with offices in Mazar e
                                Sharif, Herat, Kandahar and Kabul. Since
                                establishment, we have welcomed a number of
                                repeat clients – a testament to the service we
                                provide.
                            </p>
                        </div>
                        <div className="max-lg:mt-12 lg:ml-24 h-full">
                            <Image
                                width={620}
                                height={620}
                                src="/global/logo.png"
                                alt="banner img"
                                className="w-full h-full object-contain items-center justify-center"
                            />
                        </div>
                    </div>
                    <Link
                        href="/keystaffs"
                        className="bg-secondary mt-6 lg:mt-16 text-white px-10 py-3 mx-auto w-1/3 rounded-md justify-center items-center text-xl font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex "
                    >
                        View Key Staffs
                    </Link>
                </div>
            </div>

            {/* Broad-Based Experience */}
            <div className="px-4 sm:px-10 bg-stone-100 py-24">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid lg:grid-cols-2 items-center gap-24">
                        <div className="">
                            <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                                Broad-Based Experience
                            </h2>
                            <p>
                                Global Gate Construction utilizes their
                                expertise and integrity to deliver a range of
                                project types to the utmost quality standards.
                                Some of the project types we undertake include:
                            </p>
                            <ul className="list-disc mt-4 mx-12 gapy-3">
                                <li>A&E DESIGN</li>
                                <li>MILITARY CONSTRUCTION PROJECTS</li>
                                <li>COMMERCIAL PROJECTS</li>
                                <li>CIVIL PROJECTS</li>
                                <li>POWER & ENERGY</li>
                                <li>PROCUREMENT & LOGISTICS</li>
                            </ul>
                        </div>
                        <Image
                            width={620}
                            height={620}
                            src="/assets/homeimg.webp"
                            alt="banner img"
                            className="w-full h-full object-contain items-center justify-end mt-6 lg:mt-16"
                        />
                    </div>
                </div>
                <div className="max-w-7xl w-full mx-auto py-24 text-justify">
                    <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                        Management And Process – Success Through Relationships
                    </h2>
                    <p>
                        We pride ourselves on providing the highest standard of
                        professional construction services and believe that it
                        is the rapport between the client and the project team
                        that enables us to deliver the most mutually satisfying
                        project outcomes. Our methodologies take into account
                        our clients’ key project drivers from the outset to
                        ensure that we exceed quality expectations and maximize
                        value.
                    </p>
                    <p>
                        Bringing together a leading-edge construction team from
                        a range of backgrounds means that we have fresh ideas
                        and a constructive can-do approach to our work. Our
                        management team works closely with clients and
                        consultants through all stages of the construction
                        process. We implement a number of project monitoring and
                        reporting strategies to maximize communication,
                        efficiency and overcome any issues early on. Whilst
                        adopting industry best practice, we will always
                        challenge existing process to ensure we have the best
                        solution, believing that when we bring great people and
                        sound process together, we have every chance of success.
                    </p>
                </div>
            </div>

            {/* Safety */}
            <div className="px-4 sm:px-10 py-6 bg-gray-50">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-24">
                        <div className="text-justify">
                            <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                                Safety
                            </h2>

                            <div className="mt-4">
                                <p>
                                    It is our aim to send everyone home safely
                                    every day and our people uphold these
                                    principles. This has resulted in outstanding
                                    Health and Safety records. We are committed
                                    to continuous safety improvement, not only
                                    through best practice processes, but also
                                    through regular measurement and review of
                                    our safety performance, project by project.
                                    Global Gate’s Accident Prevention Plan (APP)
                                    which is in strict conformance with Manual
                                    EM385-1-1 has been approved by US Army Corps
                                    of Engineers and is updating as safety
                                    requirements and hazards change and lessons
                                    learned from the other projects running
                                    around Afghanistan.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-center items-center py-12">
                            <Image
                                width={1000}
                                height={1000}
                                src="/global/others/safety.jpg"
                                alt="Premium Benefits"
                                className="w-2/3 h-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quality */}
            <div className="px-4 sm:px-10 py-6 bg-gray-50">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-24">
                        <div className="w-full h-full  flex justify-center items-center py-12">
                            <Image
                                width={1000}
                                height={1000}
                                src="/global/others/Quality.jpg"
                                alt="Premium Benefits"
                                className="w-3/5 h-full rounded-3xl object-cover"
                            />
                        </div>
                        <div className="text-justify">
                            <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                                Quality
                            </h2>

                            <div className="mt-4">
                                <p>
                                    We believe that Henry Ford had it right when
                                    he said “Quality means doing it right when
                                    no one is looking.” Our commitment to
                                    quality, delivered through our people and
                                    their outstanding attitude, is what stands
                                    Global Gate Construction apart. In addition,
                                    we maintain strong partnerships with
                                    industry specialists and subcontractors –
                                    from architects, engineers and project
                                    consultants, to specialized construction and
                                    civil works subcontractors. These
                                    relationships promote quality through
                                    innovation, delivering an unparalleled
                                    caliber of construction management services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Culture */}
            <div className="px-4 sm:px-10 py-6 bg-gray-50">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-24">
                        <div className="text-justify">
                            <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                                Culture
                            </h2>

                            <div className="mt-4">
                                <p>
                                    Our culture is one of ‘people first’ in all
                                    aspects of the business. This begins with
                                    our own staff but, importantly, it also
                                    extends to the way we interact with our
                                    clients and other project stakeholders.
                                    Taking account of these human elements means
                                    that we build strong relationships, which
                                    result in more openness and a smoother path
                                    to great outcomes for all involved.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-center items-center py-12">
                            <Image
                                width={1000}
                                height={1000}
                                src="/global/others/Cultral.jpg"
                                alt="Premium Benefits"
                                className="w-2/3 h-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Broad-Based Experience */}
            <div className="px-4 sm:px-10 bg-stone-100 py-24">
                <div className="max-w-7xl w-full mx-auto items-center justify-center flex py-24 text-justify">
                    <h2 className="md:text-4xl text-3xl font-semibold mb-6">
                        ORGANIZATION BREAKDOWN STRUCTURE
                    </h2>
                    <p>
                        Below is the OBS of Global Gate in high level showing
                        the main decision making structure of the organization
                        and their level of authorities. Each directorate is
                        eventually owns their own structure which could be
                        accessed by clicking over the related department. View
                        OBS
                    </p>
                </div>
                <div className="w-full h-full flex justify-center items-center ">
                    <Image
                        width={1000}
                        height={1000}
                        src="/global/others/BoardofDirectors.png"
                        alt="Premium Benefits"
                        className="w-2/3 h-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
