import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
export default function UserLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900">
            <nav className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center gap-4">
                                <img
                                    className="w-12"
                                    src="img/LogoC.png"
                                    alt=""
                                />
                                <h2 className="text-2xl font-bold dark:text-gray-200 text-gray-700">
                                    Start Project
                                </h2>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ms-6"></div>
                        <div className="-me-2 flex items-center sm:hidden"></div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
