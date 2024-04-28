import { usePage } from "@inertiajs/react";
import React from "react";
import LinkButton from "@/Components/LinkButton";
import UserLayout from "@/Layouts/UserLayout";
export default function Career() {
    const { careers } = usePage().props;

    const getImagePath = (careerId) => {
        return `/img/careers/img${careerId}.png`;
    };

    return (
        <div>
            <nav className="bg-slate-900 flex justify-between p-4">
            <h2 className="text-2xl font-bold text-gray-200">TechasasasNext</h2>
            <img src="img/icons/sun.svg" alt="" />
            </nav>
            <div><p>dasdasdas</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-800">
                {careers.map((career) => (
                    <div key={career.id} className="">
                        <div className="flex" key={career.id}>
                            <div><p>asas</p></div>
                            <LinkButton
                                name={
                                <div className="text-center">
                                    <img
                                    className="w-32"
                                    src={getImagePath(career.id)}
                                    alt={career.name}/>
                                    <span className="text-gray-800 mt-4 inline-block">{career.name}</span>
                                </div>
                                
                                }
                                url={route("projects.by.career", {
                                    careerId: career.id,
                                })}
                                className="block bg-slate-800"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
