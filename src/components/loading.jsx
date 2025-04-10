import React from "react";

const LoadingComponent = () => {
    return (
        <div className="flex justify-center h-screen items-center my-auto py-12">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin border-t-red-600"></div>
                <p className="text-lg sm:text-xl font-semibold text-gray-700 mt-4">
                    Loading projects, please wait...
                </p>
                <p className="text-sm text-gray-500">
                    This may take a few moments.
                </p>
            </div>
        </div>
    );
};

export default LoadingComponent;
