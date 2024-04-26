import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import React from "react";
import LinkButton from "@/Components/LinkButton";
export default function Career () {
    const { careers } = usePage().props;
    return (
        <div>
            <h2>Bienvenido</h2>
            <div>
                {careers.map((career, id) => (
                    <a href="/listprojects" className="block">{career.name}</a>
                ))}
            </div>
            <LinkButton 
                name="Ver mas"
                className="text-blue-500 border-b-2 border-blue-500 cursor-pointer"
                url={route("projects.getProject")}
            />
            
        </div>
    )
}
