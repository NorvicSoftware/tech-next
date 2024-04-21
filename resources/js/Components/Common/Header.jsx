import React from "react";

const Header = ({ titulo }) => {
    return (
        <header>
            <nav className="bg-green-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Tech-Next
                        </span>
                    </a>
                    <div className="solYluna">
                        Logo
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
