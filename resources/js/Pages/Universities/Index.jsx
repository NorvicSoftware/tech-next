import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

const Index = ({ auth }) => {
    const { universities } = usePage().props;

    return (
        <AuthenticatedLayout user={auth} header="Universidad">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">
                            Lista de Universidades
                        </h2>
                        <div className="flex justify-end">
                            <NavLink
                                href={route("universities.create")}
                                active={route().current("universities.create")}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mx-2 mb-4"
                            >
                                Añadir universidad
                            </NavLink>
                        </div>

                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Teléfono
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Dirección
                                    </th>
                                    <th className="px-6 py-3"></th>
                                    <th className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {universities.map((university) => (
                                    <tr key={university.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {university.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {university.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {university.address}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <NavLink
                                                href={route(
                                                    "universities.edit",
                                                    { id: university.id }
                                                )}
												
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Editar
                                            </NavLink>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <NavLink
                                                href={route(
                                                    "universities.destroy",
                                                    { id: university.id }
                                                )}
                                                method="delete"
                                                as="button"
                                                className="text-red-600 hover:text-red-900"
                                                onClick={(e) => {
                                                    if (
                                                        !confirm(
                                                            "¿Estás seguro de que quieres eliminar esta universidad?"
                                                        )
                                                    ) {
                                                        e.preventDefault();
                                                    }
                                                }}
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
        </AuthenticatedLayout>
    );
};
export default Index;
