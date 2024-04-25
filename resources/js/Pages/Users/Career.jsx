import React from "react";
import { usePage, Head } from "@inertiajs/react";
import CareerHeader from "@/Components/CareerHeader";
import CareerCard from "@/Components/CareerCard";
import UserLayout from "@/Layouts/UserLayout";

const Career = ({user}) => {
    return (

        <UserLayout>
            <div className="bg-gray-900 text-white min-h-screen">
                <div className="flex flex-col items-center mt-6">
                    <h1 className="text-4xl font-bold mb-2">TechNext</h1>
                    <p className="text-gray-300 text-lg mb-4 md:mb-0 font-bold">
                        Inspirate y crea nuevas ideas
                    </p>
                </div>
                <div className="container mx-auto">
                    <div className="container mx-auto h-auto px-7 sm:p-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-14">
                       
                       
                        <CareerCard
                            src="/images/Careers/programmer.png"
                            title="Ing. Sistemas"
                        />



                        <a
                            href={route("list")}
                            className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4"
                        >
                            <img
                                src="/images/Careers/programmer.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <CareerHeader name="Ing.Sistemas" />
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/reporter.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Comunicación
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/trade.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Ing. Comercial
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/marketing.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Marketing
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/designer.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Diseño Grafico{" "}
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/businessman.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Adm. Empresas
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/robot.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Mecatronica
                            </h2>
                        </a>

                        <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                            <img
                                src="/images/Careers/travel.png"
                                alt=""
                                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                            />
                            <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
                                Turismo
                            </h2>
                        </a>
                    </div>
                </div>
                <footer className="text-gray-600 text-center mt-8">
                    <p>&copy; 2024 TechNex</p>
                </footer>
            </div>
        </UserLayout>
    );
};

export default Career;
