import { usePage } from "@inertiajs/react";
import React from "react";
import LinkButton from "@/Components/LinkButton";

export default function Project() {
    const { projects } = usePage().props;
    return (
        <div>
            <h1>Hola Projects</h1>
            <hr></hr>
            <div>
                {projects.map((project, id) => (
                    <div key={project.id}>
                        <p>{project.title}</p>
                        <LinkButton
                            name="Ver"
                            className="dark:text-white dark:bg-green-600 bg-green-800 dark:hover:bg-green-900 rounded 0 w-16 flex justify-center normal-case p-1"
                            url={route("usershow.show", project.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
