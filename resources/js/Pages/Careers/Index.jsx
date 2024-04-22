import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

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
            a={
                <a
                    href={route("careers.create")}
                    active={route().current("careers.create")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                >
                    Añadir Nueva Carrera
                </a>
            }
        >
            {/* <table className="min-w-full m-0">
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
            </table> */}
            <div className="overflow-x-auto bg-gray-800">
                <div className="mx-4 bg-gray-900 rounded-md">
                    <div className="grid grid-cols-4 text-gray-200 text-center p-4">
                        <div className="">Carrera</div>
                        <div>Dirección</div>
                        <div>Teléfono</div>
                        <div>Acción</div>
                    </div>
                    {careers.map((career, id) => (
                        <div className="grid grid-cols-4 text-center text-gray-800 bg-gray-200 border-t-2 border-gray-300 rounded-md p-2 cursor-pointer justify-center items-center">
                            <div className="text-left">{career.name}</div>
                            <div>
                                {career.university ? career.university.name : "N/A"}
                            </div>
                            <div>{career.phone}</div>
                            <div className="flex flex-col flex-shrink-0 items-center justify-center gap-2">
                                <NavLink
                                    href={route("careers.edit", career.id)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Editar
                                </NavLink>
                                <NavLink
                                    href={route("careers.destroy", career.id)}
                                    method="delete"
                                    as="button"
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Eliminar
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
