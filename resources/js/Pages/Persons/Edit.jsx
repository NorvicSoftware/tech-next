import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Edit = ({ auth, person }) => {
    const { data, setData, put, errors, reset } = useForm({
        first_name: person.first_name,
        last_name: person.last_name,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('persons.update', person.id));
    };

    return (
        <AuthenticatedLayout user={auth} Header="Personas">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Editar Autor
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.first_name}
                            onChange={(e) =>
                                setData('first_name', e.target.value)
                            }
                        />
                        {errors.first_name && (
                            <span className="text-red-500">
                                {errors.first_name}
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.last_name}
                            onChange={(e) =>
                                setData('last_name', e.target.value)
                            }
                        />
                        {errors.last_name && (
                            <span className="text-red-500">
                                {errors.last_name}
                            </span>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;