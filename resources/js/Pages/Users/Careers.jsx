<<<<<<< HEAD
import React from "react";
import CareerImage from "@/Components/CareerImage";
import CareerHeader from "@/Components/CareerHeader";
import { usePage, Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Career = () => {
    const {careers} = usePage().props;
    console.log(careers);
    
    return (
        <div className="bg-gray-900 text-white min-h-screen">

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
=======
/* import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Careers = ({ careers }) => {
    return (
        <div>
            <h1>Lista de Carreras</h1>
            {careers.map(career => (
                <div key={career.id}>
                    <h2>{career.name}</h2>
                    <Link href={route('users.projects.by.career', career.id)}>Ver Proyectos</Link>
                </div>
            ))}
        </div>
    );
};

export default Careers;
 */

import { usePage } from "@inertiajs/react";
import React from "react";
import LinkButton from "@/Components/LinkButton";
export default function Career() {
    const { careers } = usePage().props;

    const getImagePath = (careerId) => {
        return `/img/careers/img${careerId}.png`;
    };

    return (
        <div>
            <nav className="bg-slate-900 flex justify-between p-4">
            <h2 className="text-2xl font-bold text-gray-200">TechNext</h2>
            <img src="img/icons/sun.svg" alt="" />
            </nav>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-800">
                {careers.map((career) => (
                    <div key={career.id} className="">
                        <div className="flex" key={career.id}>
                            
                            <LinkButton
                                name={
                                <div className="text-center">
                                    <img
                                    className="w-32"
                                    src={getImagePath(career.id)}
                                    alt={career.name}/>
                                    <span className="text-gray-800 mt-4 inline-block">{career.name}</span>
                                </div>
                                
                                }
                                url={route("projects.by.career", {
                                    careerId: career.id,
                                })}
                                className="block bg-slate-800"
                            />
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
>>>>>>> 043c476c83fdc04f353f72c313e7a5e0ac445ecc
