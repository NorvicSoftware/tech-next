import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Index({ importProjectsRoute, auth }) {
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
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Proyectos
                </h2>
            }
        >
            <div className="flex flex-col bg-gray-800 m-auto justify-center items-center w-[50%] rounded-md mt-10 text-gray-200">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4 flex flex-col gap-8">
                        <label
                            htmlFor="file"
                            className="block text-lg font-medium text-gray-200 mt-4"
                        >
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
                            <p className="text-red-500 text-sm mt-1">
                                {fileError}
                            </p>
                        )}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Import Projects
                            </button>
                        </div>
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
}
