
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect } from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import LinkButton from "@/Components/LinkButton";

const Form = ({ auth, projects, initialData }) => {
  const { id } = usePage().props;
  const { data, setData, post, errors, put } = useForm({
    project_id: initialData ? initialData.project_id.toString() : "",
    good: initialData ? initialData.good : "",
    indifferent: initialData ? initialData.indifferent : "",
    bad: initialData ? initialData.bad : "",
  });

  const textHeader = id === 0 ? "Crear Nueva Puntuación" : "Editar Puntuación";

  useEffect(() => {
    if (initialData) {
      setData("project_id", initialData.project_id.toString());
      setData("good", initialData.good);
      setData("indifferent", initialData.indifferent);
      setData("bad", initialData.bad);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      project_id: data.project_id,
      good: data.good,
      indifferent: data.indifferent,
      bad: data.bad,
    };
    if (id === 0) {
      post(route("scores.store"));
    } else {
      put(route("scores.update", id), newData);
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

        <InputLabel>Bueno:</InputLabel>
        <input
          type="number"
          className="border rounded px-3 py-2 w-full"
          value={data.good}
          onChange={(e) => setData("good", e.target.value)}
        />
        {errors.good && <span className="text-red-500">{errors.good}</span>}

        <InputLabel>Indiferente:</InputLabel>
        <input
          type="number"
          className="border rounded px-3 py-2 w-full"
          value={data.indifferent}
          onChange={(e) => setData("indifferent", e.target.value)}
        />
        {errors.indifferent && <span className="text-red-500">{errors.indifferent}</span>}

        <InputLabel>Malo:</InputLabel>
        <input
          type="number"
          className="border rounded px-3 py-2 w-full"
          value={data.bad}
          onChange={(e) => setData("bad", e.target.value)}
        />
        {errors.bad && <span className="text-red-500">{errors.bad}</span>}

        <div className="flex justify-between">
          <PrimaryButton type="submit">Guardar</PrimaryButton>
          <LinkButton name="Cancelar" url="/scores" />
        </div>
      </form>
    </AuthenticatedLayout>
  );
};

export default Form;
