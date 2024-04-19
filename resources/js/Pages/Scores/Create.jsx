import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useForm } from "@inertiajs/react";

const Create = ({ auth, projects }) => {
    const { data, setData, post, errors } = useForm({
        reaction: "",
        project_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("scores.store"));
    };

    return (
        <AuthenticatedLayout user={auth} Header="Crear Puntuación">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Crear Puntuación
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-white">Reacción</label>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={data.reaction}
                            onChange={(e) => setData("reaction", e.target.value)}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="good">Bueno</option>
                            <option value="indifferent">Indiferente</option>
                            <option value="bad">Malo</option>
                        </select>
                        {errors.reaction && (
                            <span className="text-red-500">{errors.reaction}</span>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1 text-white">Proyecto</label>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={data.project_id}
                            onChange={(e) => setData("project_id", e.target.value)}
                        >
                            <option value="">Seleccionar...</option>
                            {projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.title}
                                </option>
                            ))}
                        </select>
                        {errors.project_id && (
                            <span className="text-red-500">
                                {errors.project_id}
                            </span>
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
