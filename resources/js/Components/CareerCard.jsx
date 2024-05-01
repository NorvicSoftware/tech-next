import React from "react";

const CareerCard = ({ src, title }) => {
    return (
        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
            <img
                src={src}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
            />
            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                {title}
            </h2>
        </a>
    );
};

export default CareerCard;