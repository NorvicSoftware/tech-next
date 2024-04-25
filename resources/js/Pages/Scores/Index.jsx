import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ auth }) => {
    const { scores } = usePage().props;

    const projectScores = scores.reduce((acc, score) => {
        const projectTitle = score.project ? score.project.title : "N/A";

        if (!acc[projectTitle]) {
            acc[projectTitle] = {
                bueno: 0,
                indiferente: 0,
                malo: 0,
                id: null,
            };
        }

        if (score.reaction === "Bueno") {
            acc[projectTitle].bueno += 1;
        } else if (score.reaction === "Indiferente") {
            acc[projectTitle].indiferente += 1;
        } else if (score.reaction === "Malo") {
            acc[projectTitle].malo += 1;
        }

        acc[projectTitle].id = score.id;

        return acc;
    }, {});

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Puntuaciones
                </h2>
            }
        >
            <Head title="Puntuaciones" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-3 sm:p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-gray-20 text-xs sm:text-lg">
                                    <tr>
                                        <th className="sm:p-4 py-4 border-b border-gray-500 ">
                                            Proyecto
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Bueno
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Indiferente
                                        </th>
                                        <th className="sm:p-4 py-4 border-b border-gray-500">
                                            Malo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {Object.entries(projectScores).map(
                                        ([project, scores], id) => (
                                            <tr
                                                className="text-xs sm:text-base text-black dark:text-white "
                                                key={id}
                                            >
                                                <td className="px-4 py-4 text-left">
                                                    {project}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {scores.bueno}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {scores.indiferente}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {scores.malo}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
