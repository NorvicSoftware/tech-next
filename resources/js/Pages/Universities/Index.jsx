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
            name="Añadir Nueva Universidad"
            url="/universities/create"
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Universidades
                </h2>
            }
        >
            <Head title="Universidades" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 sm:p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-gray-20 text-xs sm:text-lg">
                                    <tr>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[35%]">
                                            Universidad
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[15%]">
                                            Teléfono
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[35%]">
                                            Dirección
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[15%]">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {universities.map((university, id) => (
                                        <tr
                                            className="text-xs sm:text-base text-black dark:text-white text-left"
                                            key={university.id}
                                        >
                                            <td className="sm:p-4 py-2">
                                                {university.name}
                                            </td>
                                            <td className="sm:p-4 py-2 text-center">
                                                {university.phone}
                                            </td>
                                            <td className="sm:p-4 py-2">
                                                {university.address}
                                            </td>
                                            <td className="sm:flex justify-center grid gap-2 sm:p-3 py-4 h-[100%]">
                                                <LinkButton
                                                    name="Editar"
                                                    className="dark:text-white dark:bg-blue-800 bg-blue-800 dark:hover:bg-blue-900 rounded 0 w-16 flex justify-center normal-case p-1"
                                                    url={route(
                                                        "universities.edit",
                                                        university.id
                                                    )}
                                                />
                                                <NavLink
                                                    href={route(
                                                        "universities.destroy",
                                                        university.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-600 text-white rounded-md tracking-widest hover:bg-red-900 w-16 flex justify-center items-center text-xs hover:border-red-900 dark:hover:border-red-900 pb-2 sm:pb-1"
                                                >
                                                    Eliminar
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
