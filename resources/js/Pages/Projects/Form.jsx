// Form.jsx
import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LinkButton from "@/Components/LinkButton";
import SecondaryButton from "@/Components/SecondaryButton";

const Form = ({ auth, persons, careers }) => {
    const { id, project, errors } = usePage().props;
    const { data, setData, post, put } = useForm({
        title: project ? project.title : "",
        qualification: project ? project.qualification : "",
        year: project ? project.year : "",
        manager: project ? project.manager : "",
        person_id: project ? project.person_id : "",
        career_id: project ? project.career_id : "",
    });

    const textHeader = id === 0 ? "Crear Proyecto" : "Editar Proyecto";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("projects.store"), {
                onSuccess: (res) => {
                    console.log("OK");
                },
                onError: (error) => {
                    console.log("error" + error);
                },
            });
        } else {
            put(route("projects.update", project.id), {
                onSuccess: (res) => {
                    console.log("OK");
                },
                onError: (error) => {
                    console.log("error" + error);
                },
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="mx-10 font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {textHeader}
                </h2>
            }
        >
            <Head title={textHeader} />
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <InputLabel className="text-lg">
                                        Titulo
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
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Calificación
                                    </InputLabel>
                                    <TextInput
                                        type="number"
                                        maxlength="100"
                                        className="w-full border rounded px-3 py-2"
                                        value={data.qualification}
                                        onChange={(e) =>
                                            setData(
                                                "qualification",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.qualification && (
                                            <span className="text-red-500">
                                                {errors.qualification}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Año
                                    </InputLabel>
                                    <TextInput
                                    type="number"
                                        className="w-full border rounded px-3 py-2"
                                        value={data.year}
                                        onChange={(e) => setData("year", e.target.value)} />
                                    {errors.year && (
                                            <span className="text-red-500">
                                                {errors.year}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Tutor
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.manager}
                                        onChange={(e) => setData("manager", e.target.value)} />
                                    {errors.manager && (
                                            <span className="text-red-500">
                                                {errors.manager}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Seleccione un estudiante
                                    </InputLabel>
                                    <select
                                        className="w-full border rounded px-3 py-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 shadow-sm"
                                        value={data.person_id}
                                        onChange={(e) =>
                                            setData("person_id", e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Seleccione un estudiante
                                        </option>
                                        {persons.map((person) => (
                                            <option
                                                key={person.id}
                                                value={person.id}
                                            >{`${person.first_name} ${person.last_name}`}</option>
                                        ))}
                                    </select>
                                    {errors.person_id && (
                                            <span className="text-red-500">
                                                {errors.person_id}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Seleccione una carrera
                                    </InputLabel>
                                    <select
                                        className="w-full border rounded px-3 py-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 shadow-sm"
                                        value={data.career_id}
                                        onChange={(e) =>
                                            setData("career_id", e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Seleccione una carrera
                                        </option>
                                        {careers.map((career) => (
                                            <option
                                                key={career.id}
                                                value={career.id}
                                            >
                                                {career.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.career_id && (
                                            <span className="text-red-500">
                                                {errors.career_id}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Imagen
                                    </InputLabel>
                                    <input
                                        type="file"
                                        className="w-full border rounded px-3 py-2 text-gray-200"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />
                                    {errors.image && (
                                        <span className="text-red-500">
                                            {errors.image}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <SecondaryButton className="dark:text-white dark:bg-blue-800 bg-blue-800  dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-800 dark:focus:bg-blue-900 focus:bg-blue-900 text-white hover:text-white active:bg-blue-800 ">
                                        {textHeader}
                                    </SecondaryButton>
                                    <LinkButton
                                        className="ml-2 dark:bg-red-600 dark:hover:bg-red-900 dark:text-white  bg-red-600 hover:bg-red-900 text-white"
                                        name="Cancelar"
                                        url="/projects"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Form;
