import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

const Create = ({ auth, projects }) => {
    const { data, setData, post, errors } = useForm({
        reaction: "",
        project_id: "",
    });

    // Estado local para mantener los contadores de reacciones
    const [reactionCounts, setReactionCounts] = useState({
        good: 0,
        indifferent: 0,
        bad: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("scores.store"));
    };

    const handleGoBack = () => {
        history.back(); 
    };

    const handleReaction = (reaction) => {
        setData("reaction", reaction);
        // Incrementar el contador correspondiente al tipo de reacción seleccionado
        setReactionCounts((prevCounts) => ({
            ...prevCounts,
            [reaction]: prevCounts[reaction] + 1,
        }));
    };

    return (
        <AuthenticatedLayout user={auth.user} Header="Crear Puntuación">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Crear Puntuación
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <InputLabel label="Reacción">
                            <div className="flex space-x-4">
                                <button
                                    className={`border rounded px-3 py-2 text-white ${
                                        data.reaction === "good" ? "bg-green-500" : ""
                                    }`}
                                    onClick={() => handleReaction("good")}
                                >
                                    Bueno
                                </button>
                                <button
                                    className={`border rounded px-3 py-2 text-white ${
                                        data.reaction === "indifferent" ? "bg-yellow-500" : ""
                                    }`}
                                    onClick={() => handleReaction("indifferent")}
                                >
                                    Indiferente
                                </button>
                                <button
                                    className={`border rounded px-3 py-2 text-white ${
                                        data.reaction === "bad" ? "bg-red-500" : ""
                                    }`}
                                    onClick={() => handleReaction("bad")}
                                >
                                    Malo
                                </button>
                            </div>
                            {errors.reaction && (
                                <InputError>{errors.reaction}</InputError>
                            )}
                        </InputLabel>
                    </div>
                    <div>
                        <InputLabel label="Proyecto">
                            <select
                                className="w-full border rounded px-3 py-2 text-black"
                                value={data.project_id}
                                onChange={(e) =>
                                    setData("project_id", e.target.value)
                                }
                            >
                                <option value="">Seleccionar...</option>
                                {projects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.title}
                                    </option>
                                ))}
                            </select>
                            {errors.project_id && (
                                <InputError>{errors.project_id}</InputError>
                            )}
                        </InputLabel>
                    </div>
                    {/* Mostrar los contadores de reacciones debajo de los botones */}
                    <div className="flex justify-between items-center">
                        <div>
                            <p>Bueno: {reactionCounts.good}</p>
                            <p>Indiferente: {reactionCounts.indifferent}</p>
                            <p>Malo: {reactionCounts.bad}</p>
                        </div>
                        <div className="flex space-x-4">
                            <SecondaryButton onClick={handleGoBack}>
                                Retroceder
                            </SecondaryButton>
                            <PrimaryButton type="submit">Crear</PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
