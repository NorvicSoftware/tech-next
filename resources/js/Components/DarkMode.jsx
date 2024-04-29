import { useEffect } from 'react';

const DarkMode = () => {
    useEffect(() => {
        const htmlElement = document.documentElement;
        const applyTheme = (theme) => {
            htmlElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        };

        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }, []);

    return null;
};

export default DarkMode;