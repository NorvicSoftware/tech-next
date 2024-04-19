import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

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
            <div className="max-w-3xl mx-auto p-6 grid justify-center my-5 border-4 rounded-xl">
                <div className="space-y-4 text-center text-2xl">
                    <p className="text-white font-bold">
                        {project.person ? project.person.first_name : "N/A"}
                        <h />
                        {project.person ? project.person.last_name : "N/A"}
                    </p>

                    <p className="text-white">
                        <span className="text-gray-600">Carrera:</span>
                        {project.career ? project.career.name : "N/A"}
                    </p>

                    <p className="text-white">
                        <span className="text-gray-600">
                            Titulo del Proyecto:
                        </span>
                        {project.title}
                    </p>

                    <p className="text-white">
                        <span className="text-gray-600"> Docente/Tutor:</span>
                        {project.manager}
                    </p>

                    <p className="text-white">
                        <span className="text-gray-600"> Calificación:</span>
                        {project.qualification}
                    </p>

                    <p className="text-white">
                        <span className="text-gray-600"> Año:</span>
                        {project.year}
                    </p>
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
