import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import ProjectData from "@/Components/ProjectData";
import { usePage } from "@inertiajs/react";

const Show = () => {
    const { projects } = usePage().props;
    return (
        <UserLayout>
            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <section className="bg-white px-2">
                                {projects.map((project, id) => (
                                    <h2>{project.title}</h2>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Show;
