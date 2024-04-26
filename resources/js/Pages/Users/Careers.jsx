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
