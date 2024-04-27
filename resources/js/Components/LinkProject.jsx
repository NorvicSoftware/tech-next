import ApplicationMoon from "./ApplicationMoon";
import ApplicationPDF from "./ApplicationPDF";

export default function LinkProject({
    name,
    url,
    className = "",
}) {
    return (
        <a
            href={url}
            className={"py-1  gap-2 font-bold items-center bg-gray-200 inline-flex rounded-full text-slate-800 justify-center px-4"}
        >
            <ApplicationPDF></ApplicationPDF>
            {name}
        </a>
    )
}