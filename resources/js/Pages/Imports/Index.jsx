import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

const Index = ({ importProjectsRoute, auth }) => {
  const { errors } = usePage().props;
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileError, setFileError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setFileError("Por favor seleccione un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch(importProjectsRoute, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setFileError(null);
  };

  return (
    <AuthenticatedLayout user={auth} Header="Import Projects">
      <div>
        <h1 className="block text-lg font-medium text-white">Importar Proyectos</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="file" className="block text-lg font-medium text-white">
              Elija el archivo para importar proyectos:
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="mt-1 block w-full"
              onChange={handleFileChange}
            />
            {fileError && (
              <p className="text-red-500 text-sm mt-1">{fileError}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Import Projects
            </button>
          </div>
        </form>
        {errors && (
          <div className="mt-4 text-sm text-red-600">
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
