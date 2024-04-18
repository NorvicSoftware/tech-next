import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, {useState} from "react";
import { useForm } from "@inertiajs/react";

export default function Create (auth){

    const { data, setData, post, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    });
    const handleSubmit = (e) => {
    e.preventDefault();
    post(route('persons.store'));
    };

return (
    <AuthenticatedLayout user={ auth } header="" >
    <div className="max-w-3xl mx-auto p-12">
    <h1 className="text-3xl font-bold mb-6 text-white">Create Person</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
    <div className="mb-3 xl:w-96">
    <label className="block mb-1 font-light text-white px-1 py-2">First Name:</label>
    <input
        type="text"      
        value={data.first_name}
        className="w-full border rounded px-3 py-2"
        onChange={(e) => setData('first_name', e.target.value)}
            />
            {errors.first_name && (
        <span className="text-red-500">{errors.first_name}</span>
            )}
    </div>     
    <div className="mb-3 xl:w-96">
    <label  className="block mb-1 font-light text-white px-1 py-2">Last Name:</label>
    <input
        type="text"      
        value={data.last_name}
        className="w-full border rounded px-3 py-2"
        onChange={(e) => setData('last_name', e.target.value)}
            />
            {errors.last_name && (
        <span className="text-red-500">{errors.last_name}</span>
            )}
    </div> 
    <div>
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600">Create</button>
    </div>
    </form>
    </div>
    </AuthenticatedLayout>
)

}