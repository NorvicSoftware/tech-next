import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";

const Create = ({ auth, persons, careers }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        phone: '',
        address: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('universities.store'));
    };

    return (
        <AuthenticatedLayout>
        
        </AuthenticatedLayout>
    );
};

export default Create;
