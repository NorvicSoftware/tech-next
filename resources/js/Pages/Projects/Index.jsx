import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Index({ auth }) {
    const { projects } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Proyectos
                </h2>
            }
            a={
                <a
                    href={route("projects.create")}
                    active={route().current("projects.create")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                >
                    Añadir Nuevo Proyecto
                </a>
            }
        >
            <div className="overflow-x-auto bg-gray-800">
                <div className="mx-4 bg-gray-900 rounded-md">
                    <div className="grid grid-cols-6 text-gray-200 text-center p-4">
                        <div className="col-span-2">Titulo Del Proyecto</div>
                        <div>Autor</div>
                        <div>Carrera</div>
                        <div>Año</div>
                        <div>Acción</div>
                    </div>
                    {projects.map((project, id) => (
                        <div className="grid grid-cols-6 text-center text-gray-800 bg-gray-200 border-t-2 border-gray-300 rounded-md p-2 cursor-pointer justify-center items-center">
                            <div className="text-left col-span-2">{project.title}</div>
                            <div>
                                {project.person
                                    ? `${project.person.first_name} ${project.person.last_name}`
                                    : "N/A"}
                            </div>
                            <div>
                                {project.career ? project.career.name : "N/A"}
                            </div>
                            <div>{project.year}</div>
                            <div className="flex flex-col flex-shrink-0 items-center justify-center gap-2">
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
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
