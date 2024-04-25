export default function ProjectData({ data, name = "", className = "" }) {
    return (
        <h2 className={"dark:text-white text-xl " + className}>
            <span className="text-gray-600">{name} </span>
            {data}
        </h2>
    );
}
