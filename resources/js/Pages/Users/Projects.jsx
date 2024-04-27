import LinkButton from "@/Components/LinkButton";
import LinkProject from "@/Components/LinkProject";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import UserLayout from "@/Layouts/UserLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Project() {
    const { projects, career } = usePage().props;

    function search(event, career_id, searchValue) {
        if (searchValue === "") {
            searchValue = 0;
        }
        event.preventDefault();
        data.post(
            route("projects.by.career", {
                careerId: career_id,
                searchValue: searchValue,
            })
        );
    }

    const getReactionImage = (reaction) => {
        switch (reaction) {
            case "Bueno":
                return "/img/reactions/bueno.svg";
            case "Indiferente":
                return "/img/reactions/indiferente.svg";
            case "Malo":
                return "/img/reactions/malo.svg";
            default:
                return "";
        }
    };

    return (
        <UserLayout>
            <div>
                <form
                    onSubmit={search}
                    className="flex gap-2 w-[90%] m-auto mt-4 mb-4"
                >
                    <TextInput
                        className="w-full bg-gray-200 border-4 "
                        type="text"
                        placeholder="Buscar proyecto"
                    />
                    <PrimaryButton className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="rgb(17, 24, 39)"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </PrimaryButton>
                </form>
                <div className="px-4">
                    {projects.map((project, id) => (
                        <div className="text-gray-200  mb-4">
                            <div className="flex border-t-4 border-indigo-500 items-center gap-4 p-2">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="/img/anonymous.jpg"
                                ></img>
                                <div className="flex flex-col">
                                    <p className="font-bold text-[1.1rem]">
                                        {project.person.first_name}{" "}
                                        {project.person.last_name}
                                    </p>
                                    <p>Carrera: {career.name}</p>
                                </div>
                                <div className="flex flex-col ml-auto">
                                    {project.qualification < 75 && (
                                        <p className="ml-auto text-green-500">
                                            Bueno
                                        </p>
                                    )}
                                    {project.qualification >= 75 &&
                                        project.qualification < 90 && (
                                            <p className="ml-auto text-lime-500">
                                                Muy Bueno
                                            </p>
                                        )}
                                    {project.qualification >= 90 && (
                                        <p className="ml-auto text-orange-500">
                                            Excelente
                                        </p>
                                    )}
                                    <p className="ml-auto">
                                        Año: {project.year}
                                    </p>
                                </div>
                            </div>
                            <p className="text-center my-4" key={project.id}>
                                {project.title}
                            </p>
                            <div className="flex justify-between">
                                <LinkProject name="Ver Proyecto" url={route("usershow.showProjectById", project.id)}>
                                </LinkProject>
                                <div className="flex gap-4">
                                    <ul>
                                        {project.scores.map((score, index) => (
                                            <li key={index}></li>
                                        ))}
                                    </ul>
                                    <div>
                                        <div className="flex gap-6 text-center">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-5"
                                                    src="/img/reactions/bueno.svg"
                                                    alt="bueno"
                                                />
                                                <p>
                                                    {
                                                        project.scores.filter(
                                                            (score) =>
                                                                score.reaction ===
                                                                "Bueno"
                                                        ).length
                                                    }
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-5"
                                                    src="/img/reactions/indiferente.svg"
                                                    alt="indiferente"
                                                />
                                                <p>
                                                    {
                                                        project.scores.filter(
                                                            (score) =>
                                                                score.reaction ===
                                                                "Indiferente"
                                                        ).length
                                                    }
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    className="w-5"
                                                    src="/img/reactions/malo.svg"
                                                    alt="malo"
                                                />
                                                <p>
                                                    {
                                                        project.scores.filter(
                                                            (score) =>
                                                                score.reaction ===
                                                                "Malo"
                                                        ).length
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    );
}
