import LinkButton from "@/Components/LinkButton";
import LinkProject from "@/Components/LinkProject";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import UserLayout from "@/Layouts/UserLayout";
import { usePage, useForm } from "@inertiajs/react";
import Search from "@/Components/Icons/Search";
import Qualification from "@/Components/Qualification";
import ScoreProject from "@/Components/ScoreProject";
import ReactionProject from "@/Components/ReactionProject";
import React from "react";

export default function Project() {
    const { projects, career, career_id } = usePage().props;
    const { data, setData, post } = useForm({
        search: "",
    });

    function search(event, searchValue) {
        event.preventDefault();
        post(route('projects.searchProjectsByCareer', career_id), {
            onSuccess: () => console.log('OK'),
            onError: () => console.log('ERROR'),
        })
    }

    return (
        <UserLayout>
            <div>
                <form
                    onSubmit={search}
                    className="flex gap-2 w-[90%] m-auto mt-4 mb-4"
                >
                    <TextInput
                        className="w-full bg-gray-200 border-4 "
                        placeholder="Buscar proyecto"
                        value={data.search}
                        onChange={(e) =>
                            setData("search", e.target.value)
                        }
                    />
                    <PrimaryButton className="">
                        <Search />
                    </PrimaryButton>
                </form>
                <div className="px-4">
                    {projects.map((project, id) => (
                        <div key={project.id} className="text-gray-200  mb-4">
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
                                    <Qualification qualification={project.qualification} />
                                    <p className="ml-auto">
                                        Año: {project.year}
                                    </p>
                                </div>
                            </div>
                            <p className="text-center my-4 uppercase" key={project.id}>
                                {project.title}
                            </p>
                            <div className="flex justify-between">
                                <LinkProject name="Ver Proyecto" url={route("usershow.showProjectById", project.id)}>
                                </LinkProject>
                                <div className="flex gap-4">
                                    <div>
                                        <div className="flex gap-6 text-center">
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Bueno"/>
                                                <ScoreProject reaction="Bueno" scores={project.scores}/>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Indiferente"/>
                                                <ScoreProject reaction="Indiferente" scores={project.scores}/>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Malo"/>
                                                <ScoreProject reaction="Malo" scores={project.scores}/>
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