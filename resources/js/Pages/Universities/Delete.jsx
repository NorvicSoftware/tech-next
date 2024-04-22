import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { InertiaLink, Head } from "@inertiajs/inertia-react";

const Delete = ({ auth, university }) => {
    const { delete: destroy } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("universities.destroy", university.id));
    };

    return (
        <AuthenticatedLayout user={auth} Header="Universidades">
            <Head title="Eliminar Universidad" />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Eliminar Universidad
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <p className="text-white">
                            ¿Estás seguro de que deseas eliminar la siguiente
                            universidad?
                        </p>
                        <p className="text-white font-bold">
                            {university.name}
                        </p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                        <InertiaLink
                            href={route("universities.index")}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Cancelar
                        </InertiaLink>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Delete;
