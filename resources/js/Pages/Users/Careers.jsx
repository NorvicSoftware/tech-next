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
            <h2>Lista de Carreras</h2>
            <div>
                {careers.map((career) => (
                    <div key={career.id}>
                        <h3>{career.name}</h3>
                        <LinkButton
                            name="Ver Projectos"
                            url={route('projects.by.career', {careerId: career.id})}
                            className="mt-2" />
                    </div>
                ))}
            </div>
            
            
        </div>
    )
}
