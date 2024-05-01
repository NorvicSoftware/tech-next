import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Sun from "@/Components/Icons/Sun";
import Moon from "@/Components/Icons/Moon";

export default function UserLayout({ children }) {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );
    
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen bg-white dark:bg-slate-800 ${darkMode ? 'dark' : ''}`}>
            <nav className={`bg-slate-900 ${darkMode ? 'dark:bg-slate-900' : ''} `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex  dark:bg-white-800">
                            <div className="shrink-0 flex items-center gap-4">
                                <Link href="/">
                                    <img
                                        src="/img/logo-project.png"
                                        className="w-11 h-8"
                                    />
                                </Link>
                                <h2 className={`text-xl font-bold text-gray-200 ${darkMode ? 'dark:text-gray-200' : ''}`}>
                                    Start Project
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center ms-6 ">
                            {!darkMode && (
                                <button onClick={toggleDarkMode}>
                                    <Sun className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-20" />
                                </button>
                            )}
                            {darkMode && (
                                <button onClick={toggleDarkMode}>
                                    <Moon className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-20" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}