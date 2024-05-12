// Form.jsx
import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import LinkButton from "@/Components/LinkButton";
import SecondaryButton from "@/Components/SecondaryButton";

const Form = ({ auth }) => {
    const { id, university, errors } = usePage().props;
    const { data, setData, post, put } = useForm({
        name: university ? university.name : "",
        phone: university ? university.phone : "",
        address: university ? university.address : "",
    });

    const textHeader = id === 0 ? "Crear Universidad" : "Editar Universidad";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("universities.store"), {
                onSuccess: () => {
                    console.log("Ok");
                },
                onError: (error) => {
                    console.log("error" + error);
                },
            });
        } else {
            put(route("universities.update", university.id), {
                onSuccess: () => {
                    console.log("Ok");
                },
                onError: (error) => {
                    console.log("error " + error);
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
                                        Universidad
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <span className="text-red-500">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Telefono
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">
                                        Direccion
                                    </InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />
                                    {errors.address && (
                                        <span className="text-red-500">
                                            {errors.address}
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
                                        url="/universities"
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
