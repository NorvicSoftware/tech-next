import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen sm:justify-center items-center pt-6 sm:pt-0 bg-gray-200 dark:bg-gray-900 grid grid-cols-5 ">
            <div className="h-screen bg-slate-800 w-[33%] z-0 absolute">
            </div>

            <div className="w-full sm:max-w-5xl mt-6 px-6 py-4 dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg col-start-2 col-end-5 z-10">
                {children}
            </div>

        </div>
    );
}