import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import ProjectData from "@/Components/ProjectData";

const Show = ({ auth, project }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight py-6">
                    Detalles del Proyecto
                </h2>
            }
        >
            <div className="max-w-3xl mx-auto p-6 grid justify-center my-5 border-4 rounded-xl border-black dark:border-white">
                <div className="space-y-4 text-center text-2xl">
                    <ProjectData
                        className="font-extrabold uppercase"
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
                        data={project.career ? project.career.name : "N/A"}
                    />
                    <ProjectData
                        name="Titulo del Proyecto:"
                        data={project.title}
                    />
                    <ProjectData name="Docente/Tutor:" data={project.manager} />
                    <ProjectData
                        name="Calificación:"
                        data={project.qualification}
                    />
                    <ProjectData name="Año:" data={project.year} />
                </div>
            </div>
            <div className="text-center">
                <NavLink
                    href={route("projects.index")}
                    className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900 text-2xl"
                >
                    Volver
                </NavLink>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
