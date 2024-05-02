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
    const defaultImageUrl = "/img/users/imgDefault.jpg";
    const handleImageError = (event) => {
        event.target.onerror = null;
        event.target.src = defaultImageUrl;
    };

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
                                        project.person.first_name +
                                        " " +
                                        project.person.last_name
                                    }
                                />
                                <ProjectData
                                    name="Carrera:"
                                    data={project.career.name}
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
                                    name="Calificación:"
                                    data={project.qualification}
                                />
                                <form onSubmit={handleSubmit}>
                                    <div className="flex gap-3">
                                        <div className="flex flex-row">
                                            <ScoreButton
                                                onClick={() =>
                                                    setData("reaction", "Bueno")
                                                }
                                            >
                                                <FaceSimle />
                                            </ScoreButton>
                                            <ScoreButton
                                                onClick={() =>
                                                    setData(
                                                        "reaction",
                                                        "Indiferente"
                                                    )
                                                }
                                            >
                                                <FaceRegular />
                                            </ScoreButton>
                                            <ScoreButton
                                                onClick={() =>
                                                    setData("reaction", "Malo")
                                                }
                                            >
                                                <FaceSad />
                                            </ScoreButton>
                                        </div>
                                        <div className="flex flex-row">
                                            <ScoreProject
                                                reaction="Bueno"
                                                scores={project.scores}
                                            />
                                            <ScoreProject
                                                reaction="Indiferente"
                                                scores={project.scores}
                                            />
                                            <ScoreProject
                                                reaction="Malo"
                                                scores={project.scores}
                                            />
                                        </div>
        <div className="">
            <UserLayout>
                <Head title={project.person.first_name} />
                <section className="px-4 bg-white dark:bg-slate-800">
                    <div className="py-3">
                        <div className="min-w-full mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white dark:bg-white overflow-hidden shadow-sm rounded-2xl border-2 border-slate-800">
                                <div className="p-6 text-gray-800 dark:text-gray-800 grid justify-items-center gap-4 text-center">
                                    <div className="w-[100px] h-[100px]">
                                        <img
                                            src={`/img/users/user${project.person.id}.jpg`}
                                            alt={`foto de ${project.person.first_name}`}
                                            className="rounded-full object-cover w-full h-full"
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <ProjectData
                                        className="text-xl font-bold text-black dark:text-black"
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
                                            qualification={
                                                project.qualification
                                            }
                                        />
                                    </ProjectData>

                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-row gap-4">
                                            <div>
                                                <ScoreButton
                                                    onClick={() =>
                                                        setData(
                                                            "reaction",
                                                            "Bueno"
                                                        )
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
                                                        setData(
                                                            "reaction",
                                                            "Malo"
                                                        )
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
                            <div className="bg-white dark:bg-white overflow-hidden shadow-sm rounded-2xl border-2 border-slate-800">
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
        </div>
    );
}
