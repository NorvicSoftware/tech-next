import { Link } from "@inertiajs/react";
import ApplicationSun from "@/Components/ApplicationSun";
export default function UserLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900">
            <nav className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="shrink-0 flex items-center gap-4">
                            <Link href="/">
                                <img
                                    src="/img/logo-project.png"
                                    className="w-12 h-8"
                                />
                            </Link>
                            <h2 className="text-1xl font-bold dark:text-gray-200 text-gray-700">
                                START PROJECT
                            </h2>
                        </div>
                        <div className="w-7 h-7">
                            <ApplicationSun />
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
