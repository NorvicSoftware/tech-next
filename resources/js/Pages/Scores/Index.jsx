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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(projectScores).map(
                            ([project, scores], id) => (
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
                                        <div className="flex gap-2">

                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
