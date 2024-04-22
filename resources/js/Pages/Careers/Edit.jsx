import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Edit = ({ auth, career, universities }) => {
    const { data, setData, put, errors, reset } = useForm({
        name: career.name,
        phone: career.phone,
        university_id: career.university_id.toString(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("careers.update", career.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Editar Carrera
                </h2>
            }
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-4 grid justify-center my-4"
            >
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
                        <option value="">Selecciona la Universidad:</option>
                        {universities.map((university) => (
                            <option
                                key={university.id}
                                value={university.id}
                            >{`${university.name}`}</option>
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
                        Editar Carrera
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default Edit;
