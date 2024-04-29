export default function ProjectData({ data, name = "", className = "" }) {
    return (
        <h2 className={"dark:text-white text-black sm:text-xl  " + className}>
            <span className="dark:text-gray-400 text-gray-700">{name} </span>
            {data}
        </h2>
    );
}
