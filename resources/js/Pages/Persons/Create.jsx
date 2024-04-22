import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        first_name: "",
        last_name: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("persons.store"));
    };

    return (
        <AuthenticatedLayout user={auth} header="">
            <div className="w-[50%] mx-auto mt-10 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Añadir Autor
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-3 xl:w-96">
                        <label className="block mb-1 font-light text-white px-1 py-2">
                            Nombres
                        </label>
                        <input
                            type="text"
                            value={data.first_name}
                            className="w-full border rounded px-3 py-2"
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                        />
                        {errors.first_name && (
                            <span className="text-red-500">
                                {errors.first_name}
                            </span>
                        )}
                    </div>
                    <div className="mb-3 xl:w-96">
                        <label className="block mb-1 font-light text-white px-1 py-2">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            value={data.last_name}
                            className="w-full border rounded px-3 py-2"
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
                    <div className="mb-3 xl:w-96 ">
                        <label className="block mb-1 font-light text-white px-1 py-2">
                            Imagen
                        </label>
                        <input
                            type="file"
                            className="w-full border rounded px-3 py-2"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        {errors.image && (
                            <span className="text-red-500">{errors.image}</span>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
