export default function ProjectData({ children, name = "", className = "" }) {
    return (
        <h2 className={"dark:text-white text-black sm:text-xl " + className}>
            <span className="dark:text-gray-400 text-gray-800">{name} </span>
            {children}
        </h2>
    );  
}
