import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const Edit = ({ auth, score, projects }) => {

    const { data, setData, put, processing, errors } = useForm({
        project_id: score.project_id,
        reaction: score.reaction,
        comment: score.comment || "", 
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("scores.update", score.id), {
            onSuccess: () => {
               
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth} Header="Editar Puntuación">
            <div className="mx-10 py-4">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Editar Puntuación
                </h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="project_id" className="block text-sm font-medium text-gray-700">
                            Proyecto
                        </label>
                        <select
                            name="project_id"
                            id="project_id"
                            value={data.project_id}
                            onChange={handleChange}
                            className="mt-1 block w-full form-select"
                        >
                            {projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.title}
                                </option>
                            ))}
                        </select>
                        {errors.project_id && <span className="text-red-600 text-sm">{errors.project_id}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="reaction" className="block text-sm font-medium text-gray-700">
                            Reacción
                        </label>
                        <select
                            name="reaction"
                            id="reaction"
                            value={data.reaction}
                            onChange={handleChange}
                            className="mt-1 block w-full form-select"
                        >
                            <option value="good">Bueno</option>
                            <option value="indifferent">Indiferente</option>
                            <option value="bad">Malo</option>
                        </select>
                        {errors.reaction && <span className="text-red-600 text-sm">{errors.reaction}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white py-2 px-4 rounded ${processing && "opacity-50"}`}
                        disabled={processing}
                    >
                        Guardar cambios
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;