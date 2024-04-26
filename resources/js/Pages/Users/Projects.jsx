import { usePage } from "@inertiajs/react";
import React from "react";

export default function Project () {
    const { projects, career } = usePage().props;
    return (
        <div>
            <h1>{career.name}</h1>
            <hr></hr>
            <div>
                {projects.map((project, id) => (
                    <p key={project.id}>{project.title}</p>
                ))}
            </div>
        </div>
    )
}