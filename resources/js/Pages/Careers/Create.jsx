import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Create = ({ auth, universities }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        phone: "",
        university_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("careers.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Creación de Carrera
                </h2>
            }
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-white">Carrera:</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                    )}
                </div>

                <div>
                    <label className="block mb-1 text-white">Teléfono:</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                    />
                    {errors.phone && (
                        <span className="text-red-500">{errors.phone}</span>
                    )}
                </div>

                <div>
                    <label className="block mb-1 text-white">
                        Universidad:
                    </label>
                    <select
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={data.university_id}
                        onChange={(e) =>
                            setData("university_id", e.target.value)
                        }
                    >
                        <option value="">Selecciona la Universidad</option>
                        {universities.map((university) => (
                            <option key={university.id} value={university.id}>
                                {university.name}
                            </option>
                        ))}
                        ;
                    </select>
                    {errors.university_id && (
                        <span className="text-red-500">
                            {errors.university_id}
                        </span>
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Crear Carrera
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Create;
