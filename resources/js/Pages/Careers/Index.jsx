import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Button from "@/Components/Button";

export default function Index({ auth }) {
    const { careers } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex mx-10 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Carreras
                    </h2>
                    <div className="text-left">
                        <Button
                            className="hover:bg-cyan-400"
                            href={route("careers.create")}
                            active={route().current("careers.create")}
                        >
                            Añadir nueva carrera
                        </Button>
                    </div>
                </div>
            }
        >
            <main className="overflow-x-auto bg-gray-800">
                <div className="grid grid-cols-4 text-gray-200 text-center p-4  bg-gray-900 mx-4 rounded-t-lg">
                    <h2>Carrera</h2>
                    <h2>Universidad</h2>
                    <h2>Teléfono</h2>
                    <h2>Acción</h2>
                </div>

                {careers.map((career, id) => (
                    <section className="grid grid-cols-4 text-center mx-4 text-gray-800 bg-gray-200 border-t-2 border-gray-300 p-2 cursor-pointer items-center">
                        <div className="text-left">{career.name}</div>

                        <div>
                            {career.university ? career.university.name : "N/A"}
                        </div>

                        <div>{career.phone}</div>

                        <div className="flex flex-col flex-shrink-0 items-center gap-1 ">
                            <NavLink
                                href={route("careers.edit", career.id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 w-16 flex justify-center"
                            >
                                Editar
                            </NavLink>
                            <NavLink
                                href={route("careers.destroy", career.id)}
                                method="delete"
                                as="button"
                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 w-16 flex justify-center"
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
