import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

const Form = ({ auth }) => {
    const { id, person, errors } = usePage().props;
    const { data, setData, post, put } = useForm({
        first_name: person ? person.first_name : "",
        last_name: person ? person.last_name : "",
    });

    const textHeader = id === 0 ? "Crear Persona" : "Editar Persona";


    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("persons.store"));
        } else {
            put(route("persons.update", person.id)); 
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
            <form onSubmit={handleSubmit} className="space-y-4 grid justify-center my-4">
                <div className="w-96 grid gap-3">
                    <div>
                        <InputLabel>Nombre del Autor</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.first_name}
                            onChange={(e) => setData("first_name", e.target.value)}
                        />
                        {errors && errors.first_name && <span className="text-red-500">{errors.first_name}</span>}
                    </div>
                    <div>
                        <InputLabel>Apellidos</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.last_name}
                            onChange={(e) => setData("last_name", e.target.value)}
                        />
                        {errors && errors.last_name && <span className="text-red-500">{errors.last_name}</span>}
                    </div>
                    </div>
                <div className="flex justify-between">
                    <PrimaryButton
                        type="submit"
                        disabled={false}
                        className="dark:bg-blue-600 dark dark:text-white bg-blue-600 dark:hover:text-black"
                    >
                        {textHeader}
                    </PrimaryButton>
                    <LinkButton
                        name="Cancelar"
                        className="dark:bg-red-600 dark:text-white bg-blue-600 dark:hover:text-black"
                        url="/persons"
                    />
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Form;
