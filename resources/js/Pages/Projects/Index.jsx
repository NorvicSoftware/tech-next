import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import LinkButton from "@/Components/LinkButton";

export default function Index({ auth }) {
    const { projects } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            name="Añadir Nuevo Proyecto"
            url="/projects/create"
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Proyectos
                </h2>
            }
        >
            <Head title="Universidades" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 sm:p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-gray-20 text-xs sm:text-lg">
                                    <tr>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Titulo del proyecto
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Autor
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Carrera
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Año
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, id) => (
                                        <tr
                                            className="text-xs sm:text-base text-black dark:text-white text-left"
                                            key={project.id}
                                        >
                                            <td className="sm:p-4 py-2">
                                                {project.title}
                                            </td>
                                            <td className="sm:p-4 py-2 text-center">
                                                {project.person.first_name}{" "}
                                                {project.person.last_name}
                                            </td>
                                            <td className="sm:p-4 py-2 text-center">
                                                {project.career
                                                    ? project.career.name
                                                    : "N/A"}
                                            </td>
                                            <td className="sm:p-4 py-2 text-center">
                                                {project.year}
                                            </td>
                                            <td className="sm:flex justify-center grid gap-2 sm:p-3 py-4 h-[100%]">
                                                <LinkButton
                                                    name="Ver"
                                                    className="dark:text-white dark:bg-green-600 bg-green-800 dark:hover:bg-green-900 rounded 0 w-16 flex justify-center normal-case p-1"
                                                    url={route(
                                                        "projects.show",
                                                        project.id
                                                    )}
                                                />
                                                <LinkButton
                                                    name="Editar"
                                                    className="dark:text-white dark:bg-blue-800 bg-blue-800 dark:hover:bg-blue-900 rounded 0 w-16 flex justify-center normal-case p-1"
                                                    url={route(
                                                        "projects.edit",
                                                        project.id
                                                    )}
                                                />
                                                <NavLink
                                                    children="Eliminar"
                                                    href={route(
                                                        "projects.destroy",
                                                        project.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-600 text-white rounded-md tracking-widest hover:bg-red-900 w-16 flex justify-center items-center text-xs hover:border-red-900 dark:hover:border-red-900 pb-2 sm:pb-1"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
