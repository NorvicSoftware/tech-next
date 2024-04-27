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
        </UserLayout>
    );
};

export default Form;
