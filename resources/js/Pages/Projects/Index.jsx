import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

export default function Index({ auth }) {
    const { projects } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            name="Nueva Proyecto"
            url="projects/create"
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
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-lg">
                                    <tr>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Titulo del proyecto
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Autor
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Carrera
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Año
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, id) => (
                                        <tr key={project.id}>
                                            <td className="px-4 py-2">
                                                {project.title}
                                            </td>
                                            <td className="px-4 py-2">
                                                {project.person.first_name}{" "}
                                                {project.person.last_name}
                                            </td>
                                            <td className="px-4 py-2">
                                                {project.career
                                                    ? project.career.name
                                                    : "N/A"}
                                            </td>
                                            <td className="px-4 py-2">
                                                {project.year}
                                            </td>
                                            <td className="flex gap-2 px-4 py-2">
                                                <NavLink
                                                    href={route(
                                                        "projects.show",
                                                        project.id
                                                    )}
                                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                >
                                                    Ver
                                                </NavLink>
                                                <NavLink
                                                    href={route(
                                                        "projects.edit",
                                                        project.id
                                                    )}
                                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                >
                                                    Editar
                                                </NavLink>
                                                <NavLink
                                                    href={route(
                                                        "projects.destroy",
                                                        project.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    Eliminar
                                                </NavLink>
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
