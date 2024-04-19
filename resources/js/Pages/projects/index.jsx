import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Index = ({ auth }) => {
    const { projects } = usePage().props;

    return (
        <AuthenticatedLayout user={auth} Header="Proyectos">
            <div className="flex justify-between mx-10 items-center py-2">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Proyectos
                </h2>
                <div className="text-left">
                    <NavLink
                        href={route("projects.create")}
                        active={route().current("projects.create")}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-blue-400"
                    >
                        + Añadir nuevo proyecto
                    </NavLink>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Título de Proyecto
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Calificación
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Año
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Tutor
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Persona
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Carrera
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>{" "}
                            {/* Agregado para acciones */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {projects.map((project, id) => (
                            <tr key={id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.title}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.qualification}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.year}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.manager}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.person
                                        ? `${project.person.first_name} ${project.person.last_name}`
                                        : "N/A"}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {project.career
                                        ? project.career.name
                                        : "N/A"}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {" "}
                                    {/* Agregado para acciones */}
                                    <div className="flex space-x-2">
                                        <NavLink
                                            href={route(
                                                "projects.show",
                                                project.id
                                            )}
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
