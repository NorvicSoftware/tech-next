import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import LinkButton from "@/Components/LinkButton";

export default function Index({ auth }) {
    const { universities } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Universidades
                    </h2>
                    <div>
                        <LinkButton
                            name="Añadir nueva Universidad"
                            url={route("universities.create")}
                            className="mx-20"
                        />
                    </div>
                </div>
            }
        >
            <Head title="Universidades" />
            <main className="overflow-x-auto bg-gray-800">
                <div className="grid grid-cols-4 text-gray-200 text-center p-4 bg-gray-900 mx-4 rounded-t-lg">
                    <h2>Nombre De La Universidad</h2>
                    <h2>Teléfono</h2>
                    <h2>Dirección</h2>
                    <h2>Acción</h2>
                </div>
                {universities.map((university, id) => (
                    <section key={id} className="grid grid-cols-4 text-center text-gray-800 bg-gray-200 border-t-2 border-gray-300 rounded-md p-2 justify-center items-center">
                        <div className="text-left">{university.name}</div>
                        <div>{university.phone}</div>
                        <div className="text-left">{university.address}</div>
                        <div className="flex flex-shrink-0 items-center justify-center gap-2">
                            <NavLink
                                href={route("universities.edit", university.id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Editar
                            </NavLink>
                            <NavLink
                                href={route("universities.destroy", university.id)}
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
