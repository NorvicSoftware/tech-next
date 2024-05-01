import { usePage, Head } from "@inertiajs/react";
import React from "react";
import LinkButton from "@/Components/LinkButton";
import UserLayout from "@/Layouts/UserLayout";

export default function Career() {
    const { careers } = usePage().props;

    const getImagePath = (careerId) => {
      return `/img/careers/img${careerId}.png`;
    };

    return (
        
        <UserLayout>
            <Head title="Start Project"></Head>
            <div className="dark:bg-gray-800 w-full mx-auto sm:px-6 lg:px-8 md:mt-0 px-4">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="text-gray-900 dark:text-gray-100">
                        <h4 className="pt-3 text-center text-xl font-bold mb-0">
                            Inspirate con nuevas ideas
                        </h4>
                        <h4 className="text-center text-xl font-bold mb-2">
                            Selecciona una carrera:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {careers.map((career, index) => (
                                <a
                                    href={route(
                                        "projects.getProjectsByCareer",
                                        { careerId: career.id }
                                    )}
                                    key={career.id}
                                    className={`grid justify-items-center border-4 rounded-xl dark:border-white transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-4`}
                                >
                                    <div className="flex flex-col items-center justify-center text-center mt-4">
                                        <img
                                            className="w-32 mb-2"
                                            src={getImagePath(index + 1)}
                                            alt={career.name}
                                        />
                                        <p className="text-black dark:text-white mb-4 font-bold">
                                            {career.name}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
