import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Index = ({ auth }) => {
    const { universities } = usePage().props;

    return (
        <AuthenticatedLayout user={auth} Header="Universidades">
            <div className="flex justify-between mx-10 items-center py-2">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Universidades
                </h2>
                <div className="text-left">
                    <NavLink
                        href={route("universities.create")}
                        active={route().current("universities.create")}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-blue-400"
                    >
                        + Añadir nueva universidad
                    </NavLink>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Nombre de Universidad
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Teléfono
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Dirección
                            </th>
                            <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {universities.map((university, id) => (
                            <tr
                                key={id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {university.name}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {university.phone}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    {university.address}
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
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
                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Eliminar
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
