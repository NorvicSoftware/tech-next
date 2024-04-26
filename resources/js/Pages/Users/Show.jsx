import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import ProjectData from "@/Components/ProjectData";
import ScoreReaction from "@/Components/ScoreReaction";
import LinkButton from "@/Components/LinkButton";


const Show = ({ project }) => {
    return (
        <UserLayout>
            <section className="px-4">
                <div className="py-3">
                    <div className="min-w-full mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-2xl">
                            <div className="p-6 text-gray-900 dark:text-gray-100 grid justify-items-center gap-4 text-center">
                                <div className="dark:bg-white bg-gray-800 rounded-full border-gray-800 dark:text-black text-white text-center w-[100px] h-[100px] grid items-center">
                                    FOTO
                                </div>
                                <ProjectData
                                    className="text-xl font-bold"
                                    data={
                                        project.person
                                            ? project.person.first_name +
                                              " " +
                                              project.person.last_name
                                            : "N/A"
                                    }
                                />
                                <ProjectData
                                    name="Carrera:"
                                    data={
                                        project.career
                                            ? project.career.name
                                            : "N/A"
                                    }
                                />
                                <ProjectData
                                    name="Proyecto de Grado"
                                    className=""
                                    data={project.title}
                                />
                                <ProjectData
                                    name="Docente/Tutor:"
                                    data={project.manager}
                                />
                                <ProjectData name="Año:" data={project.year} />
                                <ProjectData
                                    name="Proyecto:"
                                    data={project.qualification}
                                />
                                <div className="flex gap-7">
                                    <ScoreReaction />
                                    <ScoreReaction />
                                    <ScoreReaction />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-2xl">
                            <div className="p-6 text-gray-900 dark:text-gray-100"></div>
                        </div>
                        <div className="flex justify-center rouded-full my-4">
                            <LinkButton
                                name="Solicitar Proyecto"
                                url="#"
                                className="bg-blue-700 normal-case tracking-normal text-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
};

export default Show;