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
            name="Nueva Universidad"
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
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <div>
                                <LinkButton name="Nueva Universidad" url="/universities/create" />
                            </div> */}
                            <table className="min-w-full">
                                <thead className="text-lg">
                                    <tr>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Universidad
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Teléfono
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Dirección
                                        </th>
                                        <th className="px-4 py-4 border-b border-gray-500">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {universities.map((university, id) => (
                                        <tr key={university.id}>
                                            <td className="px-4 py-2">
                                                {university.name}
                                            </td>
                                            <td className="px-4 py-2">
                                                {university.phone}
                                            </td>
                                            <td className="px-4 py-2">
                                                {university.address}
                                            </td>
                                            <td className="px-4 py-2">
                                                <NavLink
                                                    href={route(
                                                        "universities.edit",
                                                        university.id
                                                    )}
                                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                >
                                                    Editar
                                                </NavLink>
                                                <NavLink
                                                    href={route(
                                                        "universities.destroy",
                                                        university.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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
