import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        phone: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("universities.store"));
    };

    return (
        <AuthenticatedLayout user={auth} header="Añadir Universidad">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Añadir Universidad
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-white">Universidad</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.title}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <span className="text-red-500">{errors.title}</span>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 text-white">
                            Teléfono
                        </label>
                        <textarea
                            className="w-full border rounded px-3 py-2"
                            value={data.phone}
                            onChange={(e) =>
                                setData("phone", e.target.value)
                            }
                        />
                        {errors.qualification && (
                            <span className="text-red-500">
                                {errors.phone}
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Dirección</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        />
                        {errors.address && (
                            <span className="text-red-500">{errors.address}</span>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
