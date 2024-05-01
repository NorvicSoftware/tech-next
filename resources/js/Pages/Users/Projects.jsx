<<<<<<< HEAD
=======
import LinkButton from "@/Components/LinkButton";
import LinkProject from "@/Components/LinkProject";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import UserLayout from "@/Layouts/UserLayout";
import { usePage, useForm, Head } from "@inertiajs/react";
import Search from "@/Components/Icons/Search";
import Qualification from "@/Components/Qualification";
import ScoreProject from "@/Components/ScoreProject";
import ReactionProject from "@/Components/ReactionProject";
>>>>>>> 0f17ebe4e41810436b2f4c9e0eb79e5bac44716a
import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import UserLayout from "@/Layouts/UserLayout";
import SecondaryButton from "@/Components/SecondaryButton";

const Form = ({ auth }) => {
    const { projects, career, errors } = usePage().props; // Obtener los proyectos de las props de la página
    const { data, setData, post } = useForm({
        title: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("projects.search"), {
            title: data.title // Enviar el valor del título ingresado por el usuario
        });
    };

<<<<<<< HEAD
    return (
        <UserLayout>
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <InputLabel className="text-lg">
                                        Título
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    {errors.title && (
                                        <span className="text-red-500">
                                            {errors.title}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <SecondaryButton
                                        className="dark:text-white dark:bg-blue-800 bg-blue-800 dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-800 dark:focus:bg-blue-900 focus:bg-blue-900 text-white hover:text-white active:bg-blue-800"
                                        type="submit" // Agregar el tipo de botón submit para enviar el formulario
                                    >
                                        Buscar
                                    </SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {projects && (
                <div>
                    <h2 className="text-white">Resultados de la búsqueda:</h2>
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} className="text-white">{project.title}</li>
                        ))}
                    </ul>
                </div>
            )}
=======
export default function Project() {
    const { projects, career, career_id } = usePage().props;
    const { data, setData, post } = useForm({
        search: "",
    });

    function search(event, searchValue) {
        event.preventDefault();
        post(route("projects.searchProjectsByCareer", career_id), {
            onSuccess: () => console.log("OK"),
            onError: () => console.log("ERROR"),
        });
    }
    const defaultImageUrl = "/img/users/imgDefault.jpg";
    const handleImageError = (event) => {
        event.target.onerror = null; 
        event.target.src = defaultImageUrl; 
    };

    return (
        
        <UserLayout>
            <Head title="Proyectos" />
            <div className="bg-white dark:bg-slate-800 h-screen">
                <form
                    onSubmit={search}
                    className="flex gap-2 w-[90%] m-auto py-4"
                >
                    <TextInput
                        className="w-full bg-white border-4 "
                        placeholder="Buscar proyecto"
                        value={data.search}
                        onChange={(e) => setData("search", e.target.value)}
                    />
                    <PrimaryButton
                        children={<Search />}
                        className="dark:bg-gray-800"
                    />
                </form>
                <div className="px-1 pb-3">
                    {projects.map((project, id) => (
                        <div
                            key={project.id}
                            className="dark:text-gray-200  mb-4 bg-white dark:bg-transparent text-gray-900 mx-2"
                        >
                            <div className="flex border-t-4 border-indigo-500 items-center gap-1 p-2">
                               <img
                                        src={`/img/users/user${project.person.id}.jpg`}
                                        alt={`foto de ${project.person.first_name}`}
                                        className="rounded-full object-cover w-10 h-10"
                                        onError={handleImageError}
                                    />
                                {
                                    <div className="w-250 h-250 bg-white">
                                        {project.person.image && (
                                            <img
                                                src={`${window.location.origin}/${project.person.image.url}`}
                                                alt="Imagen de perfil"
                                                className="rounded-lg"
                                            />
                                        )}
                                    </div>
                                }
                                <div className="flex flex-col">
                                    <p className="font-bold text-[1.1rem]">
                                        {project.person.first_name}{" "}
                                        {project.person.last_name}
                                    </p>
                                    <p>Carrera: {career.name}</p>
                                </div>
                                <div className="flex flex-col ml-auto">
                                    <Qualification
                                        qualification={project.qualification}
                                    />
                                    <p className="ml-auto">
                                        Año: {project.year}
                                    </p>
                                </div>
                            </div>
                            <p
                                className="text-center my-4 uppercase"
                                key={project.id}
                            >
                                {project.title}
                            </p>
                            <div className="flex justify-between items-center">
                                <LinkProject
                                    name="Ver Proyecto"
                                    url={route(
                                        "usershow.showProjectById",
                                        project.id
                                    )}
                                ></LinkProject>
                                <div className="flex gap-4">
                                    <div>
                                        <div className="flex gap-4 text-center">
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Bueno" />
                                                <ScoreProject
                                                    reaction="Bueno"
                                                    scores={project.scores}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Indiferente" />
                                                <ScoreProject
                                                    reaction="Indiferente"
                                                    scores={project.scores}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ReactionProject reaction="Malo" />
                                                <ScoreProject
                                                    reaction="Malo"
                                                    scores={project.scores}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
>>>>>>> 0f17ebe4e41810436b2f4c9e0eb79e5bac44716a
        </UserLayout>
    );
};

export default Form;
