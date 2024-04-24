export default function LinkButton({
    active = false,
    name,
    url,
    className = "",
}) {
    return (
        <a
            href={url}
            className={
                "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold sm:text-xs text-[10px] leading-5 transition duration-150 ease-in-out focus:outline-none uppercase tracking-widest " +
                (active
                    ? "bg-gray-800   text-white dark:text-gray-800  hover:bg-gray-700  focus:bg-gray-700 dark:focus:bg-white "
                    : "active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:hover:bg-white dark:bg-gray-200") +
                className
            }
        >
            {name}
        </a>
    );
}
