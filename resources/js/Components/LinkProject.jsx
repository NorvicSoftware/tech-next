import ApplicationPDF from "./Icons/Pdf";

export default function LinkProject({
    name,
    url,
    className = "",
}) {
    return (
        <a
            href={url}
            className={"py-1 gap-1 font-bold items-center bg-gray-200 inline-flex rounded-full text-slate-800 justify-center px-4" + className}
        >
            <ApplicationPDF></ApplicationPDF>
            {name}
        </a>
    )
}