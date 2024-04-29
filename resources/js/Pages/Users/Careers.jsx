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
                        <h2 className=" p-3 text-center" >Inspirate y crea nuevas ideas</h2>
                        <h2 className=" p-3 text-center" >Elige una carrera:</h2>
                    </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {careers.map((career, index) => (
                                <a href={route("projects.getProjectsByCareer", {
                                    careerId: career.id,
                                })} >
                                <div
                                    className="grid justify-items-center border rounded-xl border-emerald-500"
                                    key={career.id}
                                >
                                    <div className="text-center pt-3">
                                            <img
                                                className="w-32"
                                                src={getImagePath(index +1)}
                                                alt={career.name}
                                            />
                                    </div>
                                    <LinkButton
                                        name={career.name}
                                        url={route("projects.getProjectsByCareer", {
                                            careerId: career.id,
                                        })}
                                        className="block bg-slate-800 text-center bg-transparent"
                                    />
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
