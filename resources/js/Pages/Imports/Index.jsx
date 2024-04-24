import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { Link } from '@inertiajs/react';

function ImportButton() {
    return (
        <Link
            href="/import/excel" // Esta es la URL de la ruta en Laravel
            as="button" // Renderizar como un botón
            type="button" // Tipo de botón
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Importar Datos
        </Link>
    );
}

export default function Index({ importProjectsRoute, auth }) {
    const { errors } = usePage().props;
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [fileError, setFileError] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
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
                    Importar
                </h2>
            }
        >
            <ImportButton />
        </AuthenticatedLayout>
    );
}