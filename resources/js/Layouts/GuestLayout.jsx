import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen sm:justify-center items-center sm:pt-0 bg-slate-800 dark:bg-gray-900">
            
            <div className=" p-20 grid grid-cols-2 justify-center items-center">
            
                <div className="col-span-1  z-10 w-full">
                    {/*
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                */}
                    <img className="w-[400px]" src="img/login-ph.jpg" alt="" />
                </div>

                {
                    <div className="w-full sm:max-w-md mt-6 dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg col-start-0 col-span-1 z-10">
                        {children}
                    </div>
                }
            </div>
        </div>
    );
}
