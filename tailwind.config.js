import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Activa el modo oscuro basado en clases

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Define tus colores personalizados para el modo oscuro aquí
                dark: {
                    bg: '#1A202C', // Fondo oscuro
                    text: '#D1D5DB', // Texto oscuro
                    // Agrega más colores según sea necesario
                },
            },
        },
    },

    plugins: [forms],
};
