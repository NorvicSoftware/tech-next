export default function CareerHeader({name = ''}) {
    return(
        <h2 className="text-base md:text-lg font-bold text-center whitespace-nowrap overflow-hidden">
            {name}
        </h2>
    );
}