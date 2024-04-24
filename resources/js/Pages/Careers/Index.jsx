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
            <main className="overflow-x-auto pb-5 flex justify-center mt-5">
                <table className="sm:w-[90%] w-[95%] table-fixed">
                    <thead className="text-gray-200 bg-slate-950 text-xs sm:text-base ">
                        <tr className="">
                            <th className="sm:p-4 py-4 rounded-tl-lg">Carrera</th>
                            <th className="sm:p-4 py-4">Universidad</th>
                            <th className="sm:p-4 py-4">Teléfono</th>
                            <th className="sm:p-4 py-4 rounded-tr-lg">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {careers?.map((career, id) => (
                            <tr
                                className="text-xs sm:text-sm dark:bg-slate-800 text-black bg-white dark:text-white text-center dark:border-b border-b"
                                key={career.id}
                            >
                                <td className="sm:p-3 py-4">{career.name}</td>
                                <td className="sm:p-3 py-4">
                                    {career.university
                                        ? `${career.university.name}`
                                        : "N/A"}
                                </td>
                                <td className=" sm:p-3 py-4">{career.phone}</td>
                                <td className="sm:flex justify-center grid gap-2 sm:p-3 py-4">
                                    <LinkButton
                                        name="Editar"
                                        className="bg-blue-800 hover:bg-blue-950 dark:bg-blue-600 dark:text-white rounded dark:hover:bg-blue-900 w-16 flex justify-center normal-case p-1"
                                        url={route("careers.edit", career.id)}
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
            </main>
        </AuthenticatedLayout>
    );
}
