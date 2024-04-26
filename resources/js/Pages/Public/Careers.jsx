import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Careers = ({ careers }) => {
    return (
        <div>
            <h1>Lista de Carreras</h1>
            {careers.map(career => (
                <div key={career.id}>
                    <h2>{career.name}</h2>
                    <Link href={route('public.projects.by.career', career.id)}>Ver Proyectos</Link>
                </div>
            ))}
        </div>
    );
};

export default Careers;
