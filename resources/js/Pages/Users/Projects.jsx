import { usePage } from "@inertiajs/react";
import React from "react";
export default function Project () {
    const { projects } = usePage().props;
    return (
        <div>
            <h1>Hola Projects</h1>
            <hr></hr>
            <div>
                {projects.map((project, id) => (
                    <p>{project.title}</p>
                ))}
            </div>
        </div>
    )
}