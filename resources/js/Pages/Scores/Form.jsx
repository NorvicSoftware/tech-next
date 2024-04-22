import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

const Form = ({ auth, projects, initialData }) => {
  const { id } = usePage().props;
  const { data, setData, post, errors, put } = useForm({
    reaction: initialData ? initialData.reaction : "",
    project_id: initialData ? initialData.project_id.toString() : "",
  });

  const textHeader = id === 0 ? "Crear Nueva Puntuación" : "Editar Puntuación";

  useEffect(() => {
    if (initialData) {
      setData("reaction", initialData.reaction);
      setData("project_id", initialData.project_id.toString());
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 0) {

      post(route("scores.store"));
    } else {

      put(route("scores.update", id));
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
      <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-md">
        <InputLabel>Reacción:</InputLabel>
        <select
          className="border rounded px-3 py-2 w-full"
          value={data.reaction}
          onChange={(e) => setData("reaction", e.target.value)}
        >
          <option value="">Seleccionar...</option>
          <option value="good">Bueno</option>
          <option value="indifferent">Indiferente</option>
          <option value="bad">Malo</option>
        </select>
        {errors.reaction && <span className="text-red-500">{errors.reaction}</span>}

        <InputLabel>Proyecto:</InputLabel>
        <select
          className="border rounded px-3 py-2 w-full"
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
        {errors.project_id && <span className="text-red-500">{errors.project_id}</span>}

        <div className="flex justify-between">
          <PrimaryButton type="submit">Guardar</PrimaryButton>
          <LinkButton name="Cancelar" url="/scores" />
        </div>
      </form>
    </AuthenticatedLayout>
  );
};

export default Form;
