import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const ProjectsByCareer = ({ career, projects }) => {
    return (
        <div>
            <h1>Proyectos de {career.name}</h1>
            {/* Agrega aquí la funcionalidad de búsqueda si es necesario */}
            {projects.data.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    {/* Muestra aquí la información relevante del proyecto */}
                </div>
            ))}
            {/* Muestra la paginación si es necesario */}
            {projects.links.map((link, index) => (
                <Link key={index} href={link.url}>{link.label}</Link>
            ))}
        </div>
    );
};

export default ProjectsByCareer;
