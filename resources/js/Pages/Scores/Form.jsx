import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

const ScoreForm = ({ auth, projects, initialData }) => {
    const { id } = usePage().props;
    const { data, setData, post, put, errors } = useForm({
        reaction: initialData ? initialData.reaction : "",
        project_id: initialData ? initialData.project_id.toString() : "",
    });

    const textHeader = id === 0 ? "Crear Nueva Carrera" : "Editar Carrera";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route("careers.store"));
            {
                ("crear carrera");
            }
        } else {
            put(route("careers.update", career.id));
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
            <form onSubmit={handleSubmit} className="space-y-4 grid justify-center my-4">
                <div className="w-96 grid gap-3">
                    <div>
                        <InputLabel>Reacción:</InputLabel>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={data.reaction}
                            onChange={(e) => setData("reaction", e.target.value)}
                            isFocused={true}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="good">Bueno</option>
                            <option value="indifferent">Indiferente</option>
                            <option value="bad">Malo</option>
                        </select>
                        {errors.reaction && <span className="text-red-500">{errors.reaction}</span>}
                    </div>
                    <div>
                        <InputLabel>Proyecto:</InputLabel>
                        <select
                            className="w-full border rounded px-3 py-2"
                            value={data.project_id}
                            onChange={(e) => setData("project_id", e.target.value)}
                            isFocused={true}
                        >
                            <option value="">Seleccionar...</option>
                            {projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.title}
                                </option>
                            ))}
                        </select>
                        {errors.project_id && <span className="text-red-500">{errors.project_id}</span>}
                    </div>
                </div>

                <div className="flex justify-between">
                    <PrimaryButton type="submit">{textHeader}</PrimaryButton>
                    <LinkButton name="Cancelar" url="/scores" />
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default ScoreForm;
