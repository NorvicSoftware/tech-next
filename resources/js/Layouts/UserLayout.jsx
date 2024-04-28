import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import ApplicationSun from "@/Components/ApplicationSun";
import ApplicationMoon from "@/Components/ApplicationMoon";
import { useEffect, useState } from "react";
export default function UserLayout({ children }) {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector("html").classList.add('dark')
        } else {
            document.querySelector("html").classList.remove('dark')
            
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }
 
    return (
        <div class="" className="min-h-screen bg-gray-300 dark:bg-gray-900">
            <nav className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center gap-4">
                                <Link href="/">
                                    <img src="/img/logo-project.png" className="w-12 h-8" />
                                </Link>
                                <h2 className="text-1xl font-bold dark:text-gray-200 text-gray-700">
                                    START PROJECT
                                </h2>
                            </div>
                        </div>

                        <div className="flex items-center ms-6">
                            <button onClick={handleChangeTheme} ><ApplicationSun className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-20"  /> </button>
                            <button onClick={handleChangeTheme} ><ApplicationMoon className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-20"  /> </button>                            
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
