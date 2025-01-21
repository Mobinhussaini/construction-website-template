import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const BannerSection = () => {
    return (
        <div className="bg-primary px-4 font-sans">
            <div className="flex flex-row justify-between  lg:max-w-7xl sm:max-w-2xl max-w-sm mx-auto">
                  <div className="flex flex-row items-start">

                  </div>
                <div className="flex flex-row items-end">
                    <div className="text-center  px-4 flex flex-row items-center gap-3 justify-between py-2">
                        <BiPhone className="text-white text-3xl" size={15} />
                        <p className="text-gray-400 text-[12px] font-semibold mt-2">
                            +1-571- 376-3633
                        </p>
                    </div>
                    <div className="text-center flex flex-row justify-between py-2 items-center gap-3 px-4">
                        <FaLocationDot
                            className="text-white text-3xl"
                            size={15}
                        />
                        <p className="text-gray-400 text-[12px] font-semibold mt-2">
                            9405 B Lee HWY Fairfax, Fairfax VA 22031
                        </p>
                    </div>
                    <div className="text-center flex flex-row justify-between py-2 items-center gap-3 px-4">
                        <BsClock className="text-white text-3xl" size={15} />
                        <p className="text-gray-400 text-[12px] font-semibold mt-2">
                            Sat - Thu 8.00 - 16:30
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
