import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Index = ({ auth }) => {
    const { scores } = usePage().props;


    const projectScores = scores.reduce((acc, score) => {
        const projectTitle = score.project ? score.project.title : "N/A";
        
        if (!acc[projectTitle]) {
            acc[projectTitle] = {
                bueno: 0,
                indiferente: 0,
                malo: 0,
            };
        }

        if (score.reaction === 'good') {
            acc[projectTitle].bueno += 1;
        } else if (score.reaction === 'indifferent') {
            acc[projectTitle].indiferente += 1;
        } else if (score.reaction === 'bad') {
            acc[projectTitle].malo += 1;
        }


        acc[projectTitle].id = score.id;

        return acc;
    }, {});

    return (
        <AuthenticatedLayout user={auth.user} Header="Puntuaciones">
            <div className="flex justify-between mx-10 items-center py-2">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Puntuaciones
                </h2>
                <NavLink
                    href={route("scores.create")}
                    active={route().current("scores.create")}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                >
                    + Añadir nueva puntuación
                </NavLink>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Proyecto
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Bueno
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Indiferente
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Malo
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(projectScores).map(([project, scores], id) => (
                            <tr key={id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    {project}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    {scores.bueno}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    {scores.indiferente}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    {scores.malo}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                   
                                    <div>
                                    <NavLink
                                        href={route("scores.edit", scores.id)} 
                                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Editar
                                    </NavLink>

                                       
                                        <NavLink
                                            href={route("scores.destroy", scores.id)}
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