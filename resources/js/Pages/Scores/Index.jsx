import React from "react";
import { usePage, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavLink from "@/Components/NavLink";
import LinkButton from "@/Components/LinkButton";

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

        if (score.reaction === "good") {
            acc[projectTitle].bueno += 1;
        } else if (score.reaction === "indifferent") {
            acc[projectTitle].indiferente += 1;
        } else if (score.reaction === "bad") {
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
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="min-w-full">
                                <thead className="text-lg">
                                    <tr>
                                        <th className="px-4 py-4 border-b border-gray-500 font-semibold">Proyecto</th>
                                        <th className="px-4 py-4 border-b border-gray-500 font-semibold">Bueno</th>
                                        <th className="px-4 py-4 border-b border-gray-500 font-semibold">Indiferente</th>
                                        <th className="px-4 py-4 border-b border-gray-500 font-semibold">Malo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(projectScores).map(([project, scores], id) => (
                                        <tr key={id}>
                                            <td className="px-4 py-4">{project}</td>
                                            <td className="px-4 py-4">{scores.bueno}</td>
                                            <td className="px-4 py-4">{scores.indiferente}</td>
                                            <td className="px-4 py-4">{scores.malo}</td>
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
};

export default Index;
