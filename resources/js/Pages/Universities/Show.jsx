import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";

const Show = ({ auth, university }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight py-6">
                    Detalles de universidad
                </h2>
            }
        >
            <div className="max-w-3xl mx-auto p-6 grid justify-center my-5 border-4 rounded-xl bg-white">
                <div className="space-y-4 text-center text-2xl">
                    <p>
                        <span className="text-gray-600">
                            Nombre de Universidad:
                        </span>{" "}
                        {university.name}
                    </p>
                    <p>
                        <span className="text-gray-600">Teléfono:</span>{" "}
                        {university.phone}
                    </p>
                    <p>
                        <span className="text-gray-600">Dirección:</span>{" "}
                        {university.address}
                    </p>
                </div>
            </div>

            <div className="text-center">
                <NavLink
                    href={route("universities.index")}
                    className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900 text-2xl"
                >
                    Volver
                </NavLink>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;