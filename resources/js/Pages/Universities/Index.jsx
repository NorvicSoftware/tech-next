import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

const Index = ({ auth }) => {
    const { universities } = usePage().props;

    return (
        <AuthenticatedLayout user={auth} header="Universidades">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <NavLink
                    href={route("universities.create")}
                    active={route().current("universities.create")}
                >
                    añade proyecto
                </NavLink>

      
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">
                            Lista de Universidades
                        </h2>
                        <ul>
                            {universities.map((university) => (
                                <li key={university.id}>{university.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
``;
