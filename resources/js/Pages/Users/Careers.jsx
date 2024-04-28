import { usePage } from "@inertiajs/react";
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
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div>
                            <h2 className="p-3 text-center text-4xl font-bold mb-6">Inspirate y crea nuevas ideas</h2>
                            <h3 className="p-3 text-center text-2xl font-bold mb-6">Elige una carrera:</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-800">
                            {careers.map((career, index) => (
                                <a
                                    href={route("projects.getProjectsByCareer", { careerId: career.id })}
                                    key={career.id}
                                    className="grid justify-items-center border rounded-xl border-white transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-gray-700"
                                >
                                    <div className="text-center pt-3 ">
                                        <img
                                            className="w-32 mb-2"
                                            src={getImagePath(index + 1)}
                                            alt={career.name}
                                        />
                                        <p className="text-white mb-4 font-bold">{career.name}</p>
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