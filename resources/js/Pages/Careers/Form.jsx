import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
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
            post(route("careers.store"));
            {
                ("crear carrera");
            }
        } else {
            put(route("careers.update", career.id));
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
            <form
                onSubmit={handleSubmit}
                className=" space-y-4 grid justify-center my-4"
            >
                <div className="w-96 grid gap-3">
                    <div>
                        <InputLabel>Carrera:</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <span className="text-red-500">{errors.name}</span>
                        )}
                    </div>

                    <div>
                        <InputLabel>Teléfono:</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        {errors.phone && (
                            <span className="text-red-500">{errors.phone}</span>
                        )}
                    </div>

                    <div>
                        <InputLabel className="block mb-1 text-white">
                            Universidad:
                        </InputLabel>
                        <select
                            type="text"
                            className="w-full border px-3 py-2 'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                            isFocused={true}
                            value={data.university_id}
                            onChange={(e) =>
                                setData("university_id", e.target.value)
                            }
                        >
                            <option value="">Selecciona la Universidad</option>
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
                </div>

                <div className="flex justify-between">
                    <PrimaryButton
                        type="submit"
                        disable={false}
                        className="dark:bg-blue-600 dark dark:text-white bg-blue-600 dark:hover:text-black"
                    >
                        {textHeader}
                    </PrimaryButton>
                    <LinkButton
                        name="Cancelar"
                        className="dark:bg-red-600 dark:text-white bg-blue-600 dark:hover:text-black"
                        url="/careers"
                    />
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Form;
