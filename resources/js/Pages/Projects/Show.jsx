import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProjectData from "@/Components/ProjectData";
import LinkButton from "@/Components/LinkButton";
import { usePage } from "@inertiajs/react";

export default function Show({ auth }) {
    const defaultImageUrl = "/img/users/imgDefault.jpg";
    const handleImageError = (event) => {
        event.target.onerror = null;
        event.target.src = defaultImageUrl;
    };
    const { project } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detalle del Proyecto
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="space-y-4 text-center justify-center flex gap-5 items-center rounded-lg flex-wrap">
                                <div className="sm:w-[20%]  grid justify-center top-1">
                                    <img
                                        src={`/img/users/user${project.person.id}.jpg`}
                                        alt={`foto de ${project.person.first_name}`}
                                        className="w-[150px] h-[150px] rounded-full object-cover"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="sm:w-[35%] grid justify-center">
                                    <ProjectData
                                        className="font-extrabold uppercase"
                                        children={project.title}
                                    />
                                    <ProjectData
                                        name="Autor:"
                                        children={
                                            project.person
                                                ? project.person.first_name +
                                                  " " +
                                                  project.person.last_name
                                                : "N/A"
                                        }
                                    />
                                    <ProjectData
                                        name="Carrera:"
                                        children={
                                            project.career
                                                ? project.career.name
                                                : "N/A"
                                        }
                                    />
                                    <ProjectData
                                        name="Docente/Tutor:"
                                        children={project.manager}
                                    />
                                    <ProjectData
                                        name="Calificación:"
                                        children={project.qualification}
                                    />
                                    <ProjectData
                                        name="Año:"
                                        children={project.year}
                                    />
                                </div>
                                <div className="sm:w-[41%] grid justify-center">
                                    {project.image && (
                                        <img
                                            src={`${window.location.origin}/${project.image.url}`}
                                            alt="Imagen del proyecto"
                                            className="rounded-lg"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <LinkButton
                        name="Volver"
                        url={route("projects.index")}
                        className="mt-2 dark:bg-red-600 dark:hover:bg-red-900 dark:text-white  bg-red-600 hover:bg-red-900 text-white"
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
