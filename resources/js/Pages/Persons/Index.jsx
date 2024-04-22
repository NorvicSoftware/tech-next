import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";

export default function Index({ auth }) {
    const { persons } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex mx-10 items-center justify-between">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Autores
                </h2>
                <div>
                    <LinkButton
                        name="Añadir Nuevo Autor"
                        url="persons/create"
                        className=""
                    />
                </div>
            </div>
            }
        >
            <Head title="Autores" />
            
                <main className="overflow-x-auto bg-gray-800">
                    <div className="grid grid-cols-3 text-gray-200 text-center p-4 bg-gray-900 mx-4 rounded-t-lg">
                        <h2>Nombres</h2>
                        <h2>Apellidos</h2>
                        <h2>Acción</h2>
                    </div>
                    {persons.map((person, id) => (
                        <section className="grid grid-cols-3 text-center mx-4 text-gray-800 bg-gray-200 border-t-2 border-gray-300 p-2 items-center">
                            <div className="text-left">{person.first_name}</div>
                            <div className="text-left">{person.last_name}</div>
                            <div className="flex justify-center flex-shrink-0 items-center gap-1">
                                <NavLink
                                    href={route("persons.edit", person.id)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Editar
                                </NavLink>
                                <NavLink
                                    href={route("persons.destroy", person.id)}
                                    method="delete"
                                    as="button"
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </NavLink>
                            </div>
                        </section>
                    ))}
                </main>
        </AuthenticatedLayout>
    );
}