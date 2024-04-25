// Form.jsx
import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

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
                onSuccess: (res) => {
                    console.log('OK');
                },
                onError: (error) => {
                    console.log('error' + error);
                }
            });
        } else {
            put(route("universities.update", university.id), {
                onSuccess: (res) => {
                    console.log('OK');
                },
                onError: (error) => {
                    console.log('error' + error);
                }
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
                                    <InputLabel className="text-lg">Universidad</InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">Telefono</InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.phone}
                                        onChange={(e) => setData("phone", e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-lg">Direccion</InputLabel>
                                    <TextInput
                                        className="w-full border rounded px-3 py-2"
                                        value={data.address}
                                        onChange={(e) => setData("address", e.target.value)} />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <PrimaryButton>Guardar</PrimaryButton>
                                    <LinkButton className="ml-2" name="Atras" url="/universities"/>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            {/* <form onSubmit={handleSubmit} className="space-y-4 grid justify-center my-4">
                <div className="w-96 grid gap-3">
                    <div>
                        <InputLabel>Nombre de la Universidad</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors && errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div>
                        <InputLabel>Teléfono</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        {errors && errors.phone && <span className="text-red-500">{errors.phone}</span>}
                    </div>
                    <div>
                        <InputLabel>Dirección</InputLabel>
                        <TextInput
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            isFocused={true}
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        />
                        {errors && errors.address && <span className="text-red-500">{errors.address}</span>}
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
                        url="/universities"
                    />
                </div>
            </form> */}
        </AuthenticatedLayout>
    );
};

export default Form;
