//import Router from "vendor/tightenco/ziggy/src/js/Router";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react"; //Rcuperar datos
import NavLink from "@/Components/NavLink";

export default function Index (auth){

    const { persons } = usePage().props;
    console.log();
    return (

<AuthenticatedLayout user={ auth } header="" >

    <div className="border-b justify-between items-center bg-gray-50 px-4 py-1">
        <p></p>
        <div className=" text-left">
        <NavLink href= {route('persons.create')} active={route().current('persons.create')} className=" mx-6 px-4 my-2 py-1 border-transparent font-medium rounded-md text-white hover:bg-blue-700 bg-blue-800" >
            <button className="text-center text-ms">
            + Añadir nuevo
            </button> 
        </NavLink>
        </div>
    </div>
<div>
<table className="min-w-full">
    <thead className="border-b bg-gray-200">
        <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">id</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Nombres</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Apellidos</th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Acción</th>
        </tr>
    </thead>
    <tbody>
        { persons.map((person, id) => (
            <tr key={id} className=" text-center bg-white border-b">
                <td className="text-sm font-ligth text-gray-900 px-5 py-3">{ person.id }</td>
                <td className="text-sm text-gray-900 font-light px-5 py-3">{ person.first_name }</td>
                <td className="text-sm text-gray-900 font-light px-5 py-3">{ person.last_name }</td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap"> {/*  accion */}
                
                <div >
                <NavLink href={route('persons.store', person.id)} className=" mx-6 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Editar</NavLink>

                <NavLink href={route('persons.destroy', person.id)} method="delete" as="button" className="sx-10px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Eliminar</NavLink>
                </div>
                </td>
            </tr>
        )) }
    </tbody>
</table>
</div>
</AuthenticatedLayout>
    )
};
