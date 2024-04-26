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

    const textHeader = id === 0 ? "Crear Autor" : "Editar Autor";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("persons.store"), {
                onSuccess: (res) => {
                    console.log("OK");
                },
                onError: (error) => {
                    console.log("error" + error);
                },
            });
        } else {
            put(route("persons.update", person.id), {
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
                                        Nombres
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.first_name}
                                        onChange={(e) =>
                                            setData(
                                                "first_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.first_name && (
                                            <span className="text-red-500">
                                                {errors.first_name}
                                            </span>
                                        )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Apellidos
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.last_name}
                                        onChange={(e) =>
                                            setData("last_name", e.target.value)
                                        }
                                    />
                                    {errors.last_name && (
                                            <span className="text-red-500">
                                                {errors.last_name}
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
                                        url="/persons"
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
