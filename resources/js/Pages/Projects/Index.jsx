import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";

export default function Index({ auth }) {
    const { projects } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex mx-10 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Proyectos
                    </h2>
                    <div>
                        <LinkButton
                            name="Añadir Nuevo Proyecto"
                            url="projects/create"
                            className=""
                        />
                    </div>
                </div>}
        >
            <Head title="Proyectos" />
                <main className="overflow-x-auto bg-gray-800">
                    <div className="grid grid-cols-6 text-gray-200 text-center p-4 bg-gray-900 mx-4 rounded-t-lg">
                        <div className="col-span-2">Titulo Del Proyecto</div>
                        <h2>Autor</h2>
                        <h2>Carrera</h2>
                        <h2>Año</h2>
                        <h2>Acción</h2>
                    </div>
                    {projects.map((project, id) => (
                        <section className="grid grid-cols-6 text-center mx-4 text-gray-800 bg-gray-200 border-t-2 border-gray-300 p-2 items-center">
                            <div className="text-left col-span-2">
                                {project.title}
                            </div>
                            <div>
                                {project.person
                                    ? `${project.person.first_name} ${project.person.last_name}`
                                    : "N/A"}
                            </div>
                            <div>
                                {project.career ? project.career.name : "N/A"}
                            </div>
                            <div>{project.year}</div>
                            <div className="flex justify-center flex-shrink-0 items-center gap-1">
                                <NavLink
                                    href={route("projects.show", project.id)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Ver
                                </NavLink>
                                <NavLink
                                    href={route("projects.edit", project.id)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Editar
                                </NavLink>
                                <NavLink
                                    href={route("projects.destroy", project.id)}
                                    method="delete"
                                    as="button"
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </NavLink>
                            </div>
                        </section>
                    ))}
                </main>
        </AuthenticatedLayout>
    );
}
