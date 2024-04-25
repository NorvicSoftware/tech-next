import React from "react";
import Header from "@/Components/Common/Header";
import CareerImage from "@/Components/CareerImage";
import CareerHeader from "@/Components/CareerHeader";
import { usePage, Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Career = () => {
    const {careers} = usePage().props;
    console.log(careers);
    
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <div className="flex flex-col items-center mt-6">
                <h1 className="text-4xl font-bold mb-2">TechNext</h1>
                <p className="text-gray-300 text-lg mb-4 md:mb-0 font-bold">
                    Inspirate y crea nuevas ideas
                </p>
            </div>
            <div className="container mx-auto">
                <div className="container mx-auto h-auto px-7 sm:p-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-14">
                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <CareerImage src="/images/Careers/programmer.png"/>
                        <CareerHeader name="Ing.Sistemas"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                         <CareerImage src="/images/Careers/reporter.png"/>
                         <CareerHeader name="Cominucación"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                         <CareerImage src="/images/Careers/trade.png"/>

                         <CareerHeader name="Ing. Comercial"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                         <CareerImage src="/images/Careers/marketing.png"/>

                         <CareerHeader name="Marketing"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <CareerImage src="/images/Careers/designer.png"/>
                        <CareerHeader name="Diseño Grafico"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                         <CareerImage src="/images/Careers/businessman.png"/>

                         <CareerHeader name="Adm. Empresas"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                         <CareerImage src="/images/Careers/robot.png"/>

                         <CareerHeader name="Mecatrónica"/>
                    </NavLink>

                    <NavLink className="flex flex-col items-center bg-gray-800 border-4 border-white rounded-xl p-7 md:p-4 mx-4">
                        <CareerImage src="/images/Careers/travel.png"/>

                        <CareerHeader name="Turismo"/>
                    </NavLink>
                </div>
            </div>
            <footer className="text-gray-600 text-center mt-8">
                <p>&copy; 2024 TechNex</p>
            </footer>
        </div>
    );
};
export default Career;