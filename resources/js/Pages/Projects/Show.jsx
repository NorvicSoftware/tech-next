import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import ProjectData from "@/Components/ProjectData";

const Show = ({ auth, project, image, person }) => {
    console.log(image);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detalle del Proyecto
                </h2>
            }
        >
            <div className="flex gap-5 w-[90%] mx-auto p-6 justify-center my-5 border-4 rounded-xl border-none dark:bg-gray-800">
                <div className="rounded-4 border-4 row-start-1"></div>
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
                        data={project.career ? project.career.name : "N/A"}
                    />
                    <ProjectData name="Docente/Tutor:" data={project.manager} />
                    <ProjectData
                        name="Calificación:"
                        data={project.qualification}
                    />
                    <ProjectData name="Año:" data={project.year} />
                </div>
                <div className="rounded-4 border-4 "></div>
            </div>
            <div className="text-center pb-2">
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
