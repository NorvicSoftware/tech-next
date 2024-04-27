import React from "react";
import Header from "@/Components/Common/Header";
import CareerHeader from "@/Components/CareerHeader";
import { usePage, Head } from "@inertiajs/react";

const Career = () => {
    const {careers} = usePage().props;
    console.log(careers);
    
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="flex flex-col items-center mt-6">
                <h1 className="text-4xl font-bold mb-2">TechNext</h1>
                <p className="text-gray-300 text-3x1 mb-4 md:mb-0 font-bold">
                    Inspirate y crea nuevas ideas
                </p>
            </div>
            <div className="container mx-auto">
                <div className="container mx-auto h-auto px-7 sm:p-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-14">
                    <a
                      
                        className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4"
                    >
                        <img
                            src="/images/Careers/programmer.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <CareerHeader name="Ing.Sistemas"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/reporter.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                         <CareerHeader name="Cominucación"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/trade.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                         <CareerHeader name="Ing. Comercial"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/marketing.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                         <CareerHeader name="Marketing"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/designer.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <CareerHeader name="Diseño Grafico"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/businessman.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                         <CareerHeader name="Adm. Empresas"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/robot.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                         <CareerHeader name="Mecatrónica"/>
                    </a>

                    <a className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <img
                            src="/images/Careers/travel.png"
                            alt=""
                            className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
                        />
                        <CareerHeader name="Turismo"/>
                    </a>
                </div>
            </div>
            <footer className="text-gray-600 text-center mt-8">
                <p>&copy; 2024 TechNex</p>
            </footer>
        </div>
    );
};
export default Career;