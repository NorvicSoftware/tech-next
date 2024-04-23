import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Reports({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Informes
                </h2>
            }
        >
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-white">Informes por Nota final</h1>
                { }
            </div>
        </AuthenticatedLayout>
    );
}
