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
import NavLink from "@/Components/NavLink";
import React from "react";
import LinkButton from "@/Components/LinkButton";
export default function Career () {
    const { careers } = usePage().props;
    return (
        <div>
            <h2>Bienvenido</h2>
            <div>
                {careers.map((career, id) => (
                    <a href="/listprojects" className="block">{career.name}</a>
                ))}
            </div>
            <LinkButton 
                name="Ver mas"
                className="text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                url={route("projects.getProject")}
            />
            
        </div>
    )
}
