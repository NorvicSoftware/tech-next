import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Checkbox from "@/Components/Checkbox";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";

const Edit = ({ auth, projects, score }) => {
    const { data, setData, put, errors } = useForm(score);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("scores.update", score.id));
    };

    const handleGoBack = () => {
        history.back(); // This will take the user to the previous page
    };

    return (
        <AuthenticatedLayout user={auth.user} Header="Editar Puntuación">
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">
                    Editar Puntuación
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <InputLabel label="Reacción">
                            <select
                                className="w-full border rounded px-3 py-2 text-black"
                                value={data.reaction}
                                onChange={(e) => setData("reaction", e.target.value)}
                            >
                                <option value="">Seleccionar...</option>
                                <option value="good">Bueno</option>
                                <option value="indifferent">Indiferente</option>
                                <option value="bad">Malo</option>
                            </select>
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
                                <InputError>{errors.project_id}</InputError>
                            )}
                        </InputLabel>
                    </div>
                    <div className="flex justify-between">
                        <SecondaryButton onClick={handleGoBack}>Retroceder</SecondaryButton>
                        <PrimaryButton type="submit">Guardar Cambios</PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
