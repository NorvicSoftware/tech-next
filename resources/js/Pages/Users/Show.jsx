import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import UserLayout from "@/Layouts/UserLayout";
import ProjectData from "@/Components/ProjectData";
import LinkButton from "@/Components/LinkButton";
import ScoreButton from "@/Components/ScoreButton";
import FaceRegular from "@/Components/Icons/FaceRegular";
import FaceSimle from "@/Components/Icons/FaceSmile";
import FaceSad from "@/Components/Icons/FaceSad";
import ScoreProject from "@/Components/ScoreProject";
import Qualification from "@/Components/Qualification";
import { useState } from "react";

export default function Show() {
    const { id, project, person } = usePage().props;
    const [botonPresionado, setBotonPresionado] = useState(false);
    const { setData, post } = useForm({
        reaction: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("usershow.store", id), {
            preserveScroll: true,
        });
        setBotonPresionado(true);
    };
    return (
        <UserLayout>
            <Head title={project.person.first_name} />
            <section className="px-4">
                <div className="py-3">
                    <div className="min-w-full mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-2xl">
                            <div className="p-6 text-gray-900 dark:text-gray-100 grid justify-items-center gap-4 text-center">
                                <div className="w-[100px] h-[100px]">
                                    <img
                                        src={`/img/users/user${project.person.id}.jpg`}
                                        alt={`foto de ${project.person.first_name}`}
                                        className="rounded-full object-cover w-full h-full"
                                    />
                                </div>
                                <ProjectData
                                    className="text-xl font-bold"
                                    children={
                                        project.person.first_name +
                                        " " +
                                        project.person.last_name
                                    }
                                />
                                <ProjectData
                                    name="Carrera:"
                                    children={project.career.name}
                                />
                                <ProjectData
                                    name="Proyecto de Grado:"
                                    className=""
                                    children={project.title}
                                />
                                <ProjectData
                                    name="Docente/Tutor:"
                                    children={project.manager}
                                />
                                <ProjectData
                                    name="Año:"
                                    children={project.year}
                                />
                                <ProjectData
                                    name="Proyecto:"
                                    className="flex gap-1"
                                >
                                    <Qualification
                                        qualification={project.qualification}
                                    />
                                </ProjectData>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-row gap-4">
                                        <div>
                                            <ScoreButton
                                                onClick={() =>
                                                    setData("reaction", "Bueno")
                                                }
                                                children={<FaceSimle />}
                                                disabled={botonPresionado}
                                            />
                                            <ScoreProject
                                                reaction="Bueno"
                                                scores={project.scores}
                                            />
                                        </div>
                                        <div>
                                            <ScoreButton
                                                onClick={() =>
                                                    setData(
                                                        "reaction",
                                                        "Indiferente"
                                                    )
                                                }
                                                children={<FaceRegular />}
                                                disabled={botonPresionado}
                                            />
                                            <ScoreProject
                                                reaction="Indiferente"
                                                scores={project.scores}
                                            />
                                        </div>
                                        <div>
                                            <ScoreButton
                                                onClick={() =>
                                                    setData("reaction", "Malo")
                                                }
                                                children={<FaceSad />}
                                                disabled={botonPresionado}
                                            />
                                            <ScoreProject
                                                reaction="Malo"
                                                scores={project.scores}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-2xl">
                            <div className="p-2 text-gray-900 dark:text-gray-100 grid justify-center">
                                {project.image && (
                                    <img
                                        src={`${window.location.origin}/${project.image.url}`}
                                        alt="Imagen del proyecto"
                                        className="rounded-lg"
                                    />
                                )}
                            </div>
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
}
