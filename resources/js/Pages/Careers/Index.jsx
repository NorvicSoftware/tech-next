import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";
import DangerButton from "@/Components/DangerButton";

export default function Index({ auth }) {
    const { careers } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex sm:mx-10 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Carreras
                    </h2>
                    <LinkButton
                        name="Añadir nueva Carrera"
                        url="careers/create"
                        className="text-[10px]"
                    />
                </div>
            }
        >
            <Head title="Carreras" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-gray-20 text-xs sm:text-base ">
                                    <tr className="">
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Carrera
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Universidad
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Teléfono
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-white">
                                    {careers?.map((career, id) => (
                                        <tr
                                            className="text-xs sm:text-sm text-black dark:text-white text-center"
                                            key={career.id}
                                        >
                                            <td className="sm:p-3 py-4">
                                                {career.name}
                                            </td>
                                            <td className="sm:p-3 py-4">
                                                {career.university
                                                    ? `${career.university.name}`
                                                    : "N/A"}
                                            </td>
                                            <td className=" sm:p-3 py-4">
                                                {career.phone}
                                            </td>
                                            <td className="sm:flex justify-center grid gap-2 sm:p-3 py-4">
                                                <LinkButton
                                                    name="Editar"
                                                    className="bg-blue-800 hover:bg-blue-950 dark:bg-blue-600 dark:text-white rounded dark:hover:bg-blue-900 w-16 flex justify-center normal-case p-1"
                                                    url={route(
                                                        "careers.edit",
                                                        career.id
                                                    )}
                                                />

                                                <NavLink
                                                    children="Eliminar"
                                                    href={route(
                                                        "careers.destroy",
                                                        career.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-600 hover:text-white text-white rounded-md tracking-widest hover:bg-red-900 w-16 flex justify-center items-center text-xs  hover:border-red-900 dark:hover:border-red-900 pb-1"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <main className="overflow-x-auto pb-5 flex justify-center mt-5"></main>
        </AuthenticatedLayout>
    );
}
