import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import { usePage } from "@inertiajs/react";

export default function Show() {
    const { projects } = usePage().props;
    return (
        <div>
            <section className="bg-white px-2">
                <h2>hola</h2>
            </section>
        </div>
    );
}
