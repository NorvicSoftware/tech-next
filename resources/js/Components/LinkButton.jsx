export default function LinkButton({
    active = false,
    name,
    children,
    url,
    className = "",
}) {
    return (
        <a
            href={url}
            className={
                "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold sm:text-xs text-[10px] leading-5 transition duration-150 ease-in-out focus:outline-none uppercase tracking-widest " +
                (active
                    ? "hover:bg-gray-700  focus:bg-gray-700 dark:focus:bg-white dark:bg-gray-200 bg-gray-800 dark:active:bg-gray-300 dark:hover:bg-white dark:text-black text-white"
                    : "text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2   ") +
                className
            }
        >
            {name}
        </a>
    );
}
