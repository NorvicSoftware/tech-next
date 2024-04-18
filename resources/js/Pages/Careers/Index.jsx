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
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Carreras
                </h2>
            }
        >
            <div className="flex space-x-2 justify-start bg-white">
                <NavLink
                    href={route("careers.create")}
                    active={route().current("careers.create")}
                    className="flex justify-center px-4 py-1 mx-2 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-black"
                >
                    Añadir Carrera
                </NavLink>
            </div>
            <table className="min-w-full m-0">
                <thead className="border-b bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                            Carrera
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                            Teléfono
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                            Universidad
                        </th>
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {careers?.map((career, id) => (
                        <tr className="bg-white border-b" key={career.id}>
                            <td className="text-sm text-gray-900 font-light px-6 py-4  mx-auto">
                                {career.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-center">
                                {career.phone}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-center">
                                {career.university
                                    ? `${career.university.name}`
                                    : "N/A"}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 text-center flex gap-2 justify-center">
                                <NavLink
                                    href={route("careers.edit", career.id)}
                                    className="px-2 py-1 bg-blue text-white rounded bg-blue-600"
                                >
                                    Editar
                                </NavLink>
                                <NavLink
                                    href={route("careers.destroy", career.id)}
                                    method="delete"
                                    as="button"
                                    className="px-2 py-1 bg-red text-white rounded bg-red-500"
                                >
                                    Eliminar
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                    ;
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
