import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

const Form = ({ auth, career, universities }) => {
    const { id } = usePage().props;
    const { data, setData, post, put, errors } = useForm({
        name: career ? career.name : "",
        phone: career ? career.phone : "",
        university_id: career ? career.university_id.toString() : "",
    });

    const textHeader = id === 0 ? "Crear Nueva Carrera" : "Editar Carrera";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("careers.store"), {
                onSuccess: () => {
                    alert("Carrera creada correctamente");
                },
                onError: (error) => {
                    alert("Error al crear nueva carrera");
                },
            });
        } else {
            put(route("careers.update", career.id), {
                onSuccess: () => {
                    alert("Carrera editada correctamente");
                },
                onError: (error) => {
                    alert("Error al editar la carrera");
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
                                    <InputLabel className="text-lg">Carrera</InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        maxlength={50}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <span className="text-red-500">
                                            El campo de nombre es obligatorio.
                                        </span>
                                    )}
                                </div>

                                <div className="mt-4">
                                    <InputLabel className="text-lg">Teléfono</InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        maxLength={15}
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500">
                                            El campo de telefono es obligatorio.
                                        </span>
                                    )}
                                </div>

                                <div className="mt-4">
                                    <InputLabel className="text-lg">Universidad</InputLabel>
                                    <select
                                        className="w-full border rounded px-3 py-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 shadow-sm"
                                        value={data.university_id}
                                        onChange={(e) =>
                                            setData(
                                                "university_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Selecciona la Universidad
                                        </option>
                                        {universities.map((university) => (
                                            <option
                                                key={university.id}
                                                value={university.id}
                                            >
                                                {university.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.university_id && (
                                        <span className="text-red-500">
                                            {errors.university_id}
                                        </span>
                                    )}
                                </div>

                                <div className="flex justify-end mt-4">
                                    <PrimaryButton className="dark:text-white dark:bg-blue-800 bg-blue-800  dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-800 dark:focus:bg-blue-900 focus:bg-blue-900 text-white hover:text-white active:bg-blue-800 ">
                                        {textHeader}
                                    </PrimaryButton>
                                    <LinkButton
                                        className="ml-2 dark:bg-red-600 dark:hover:bg-red-900 dark:text-white  bg-red-600 hover:bg-red-900 text-white"
                                        name="Cancelar"
                                        url="/careers"
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
