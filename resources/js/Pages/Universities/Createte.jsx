import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from 'react';
import { useForm } from "@inertiajs/react";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        phone: '',
        address: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('universities.store'));
    };

    return (
        <AuthenticatedLayout user={auth} header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Añadir Universidad
            </h2>
        }>
            <div className="max-w-3xl mx-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-white">Nombre:</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
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
                            onChange={(e) => setData('phone', e.target.value)}
                        />
                        {errors.phone && (
                            <span className="text-red-500">{errors.phone}</span>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Dirección:</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                        />
                        {errors.address && (
                            <span className="text-red-500">{errors.address}</span>
                        )}
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Crear</button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
