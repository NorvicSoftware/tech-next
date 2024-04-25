import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { Head } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";

export default function Index({ auth }) {
    const { careers } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            name="Añadir Nueva Carrera"
            url="careers/create"
            header={
<<<<<<< HEAD
                <div className="flex sm:mx-10 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Carreras
                    </h2>
                    <div>
                        <LinkButton
                            name="Añadir Nueva Carrera"
                            url="careers/create"
                            className="text-[7px]"
                            
                        />
                    </div>
                </div>
            }
        >
            <Head title="Carreras" />
            <main className="overflow-x-auto dark:bg-gray-800 pb-5">
                <div className="grid grid-cols-4 text-gray-200 text-center p-2 sm:p-4  bg-gray-900 sm:mx-4 sm:rounded-t-lg text-xs sm:text-base gap-2">
                    <h2>Carrera</h2>
                    <h2>Universidad</h2>
                    <h2>Teléfono</h2>
                    <h2>Acción</h2>
                </div>

                {careers.map((career, id) => (
                    <section className="grid  mb-0.5 grid-cols-4 sm:py-6 text-center sm:mx-4 dark:text-white text-gray-800 dark:bg-gray-700 bg-gray-200 border-t-2  dark:border-gray-700 p-1 sm:p-5 items-center text-[10px] sm:text-base gap-2">
                        <div className=" text-center sm:text-left">
                            {career.name}
                        </div>

                        <div>
                            {career.university ? career.university.name : "N/A"}
                        </div>

                        <div>{career.phone}</div>

                        <div className="flex flex-col sm:flex-row flex-shrink-0 gap-3 items-center justify-center">
                            <NavLink
                                href={route("careers.edit", career.id)}
                                className="sm:px-2 sm:py-1 bg-blue-600 text-white rounded hover:bg-blue-900 w-16 flex justify-center"
                            >
                                Editar
                            </NavLink>
                            <NavLink
                                href={route("careers.destroy", career.id)}
                                method="delete"
                                as="button"
                                className="sm:px-2 sm:py-1 bg-red-600 text-white rounded hover:bg-red-900 w-16 flex justify-center"
                            >
                                Eliminar
                            </NavLink>
                        </div>
                    </section>
                ))}
            </main>
=======
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Carreras
                </h2>
            }
        >
            <Head title="Carreras" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 sm:p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-gray-20 text-xs sm:text-lg">
                                    <tr>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Carrera
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Universidad
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Teléfono
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 w-[33%]">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-white">
                                    {careers?.map((career) => (
                                        <tr
                                            className="text-xs sm:text-base text-black dark:text-white text-left"
                                            key={career.id}
                                        >
                                            <td className="sm:p-4 py-2">
                                                {career.name}
                                            </td>
                                            <td className="sm:p-4 py-2">
                                                {career.university
                                                    ? `${career.university.name}`
                                                    : "N/A"}
                                            </td>
                                            <td className=" sm:p-4 py-2 text-center">
                                                {career.phone}
                                            </td>
                                            <td className="sm:flex justify-center grid gap-2 sm:p-3 py-4 h-[100%]">
                                                <LinkButton
                                                    name="Editar"
                                                    className="dark:text-white dark:bg-blue-800 bg-blue-800 dark:hover:bg-blue-900 rounded 0 w-16 flex justify-center normal-case p-1"
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
                                                    className="bg-red-600 text-white rounded-md tracking-widest hover:bg-red-900 w-16 flex justify-center items-center text-xs hover:border-red-900 dark:hover:border-red-900 pb-2 sm:pb-1"
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
>>>>>>> 29e722c40c91b5e5f37d81c01989a25a79b498ac
        </AuthenticatedLayout>
    );
}
