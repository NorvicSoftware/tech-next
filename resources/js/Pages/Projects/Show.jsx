import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import ProjectData from "@/Components/ProjectData";
import LinkButton from "@/Components/LinkButton";

const Show = ({ auth, project, career }) => {
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
                            <div className="space-y-4 text-center justify-center ">
                                <ProjectData
                                    className="font-extrabold uppercase"
                                    data={project.title}
                                />
                                <ProjectData
                                    name="Autor:"
                                    data={
                                        project.person
                                            ? project.person.first_name +
                                              " " +
                                              project.person.last_name
                                            : "N/A"
                                    }
                                />
                                <ProjectData
                                    name="Carrera:"
                                    data={
                                        project.career
                                            ? project.career.name
                                            : "N/A"
                                    }
                                />
                                <ProjectData
                                    name="Docente/Tutor:"
                                    data={project.manager}
                                />
                                <ProjectData
                                    name="Calificación:"
                                    data={project.qualification}
                                />
                                <ProjectData name="Año:" data={project.year} />
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
};

export default Show;
