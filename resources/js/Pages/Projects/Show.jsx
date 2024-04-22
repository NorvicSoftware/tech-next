import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

const Show = ({ auth, project, image, person }) => {
    console.log(image);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detalle del Proyecto
                </h2>
            }>
            <div className="max-w-3xl mx-auto p-6 grid justify-center my-5 border-4 rounded-xl">
                <div className="space-y-4 text-center text-2xl text-gray-200">
                    <div className="flex justify-center">
                        <img className="rounded-full w-132 h-32" src="/img/anonymous.jpg" alt="" />
                    </div>
                    <p className="font-bold">
                        {project.person
                            ? project.person.first_name + " "
                            : "N/A"}
                        {project.person ? project.person.last_name : "N/A"}
                    </p>

                    <p className="">
                        <span className="">Carrera: </span>
                        {project.career ? project.career.name : "N/A"}
                    </p>

                    <p className="">
                        <span className="">
                            Titulo del Proyecto:
                        </span>
                        {' '+project.title}
                    </p>

                    <p className="">
                        <span className="">Tutor: </span>
                        {project.manager}
                    </p>

                    <p className="">
                        <span className="">Calificación: </span>
                        {project.qualification}
                    </p>

                    <p className="">
                        <span className="">Año: </span>
                        {project.year}
                    </p>
                    {image === null ? (
                        <p className="text-red-400">Imagen no disponible</p>
                    ) : (
                        <div className="flex justify-center">
                            <img className="rounded-md" src={`/storage/` + image} alt="" />
                        </div>
                    )}
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
