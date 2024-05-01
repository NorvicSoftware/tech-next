export default function ProjectData({ children, name = "", className = "" }) {
    return (
        <h2 className={"dark:text-black text-black sm:text-xl  " + className}>
            <span className="dark:text-black text-black">{name} </span>
            {children}
        </h2>
    );
}
