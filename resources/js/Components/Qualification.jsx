export default function Qualification({ qualification }) {
    return (
        <>
            {qualification <= 75 && (
                <p className="ml-auto text-lime-300 font-bold">Bueno</p>
            )}
            {qualification >= 76 && qualification <= 90 && (
                <p className="ml-auto text-lime-600 font-bold">Muy Bueno</p>
            )}
            {qualification >= 100 && (
                <p className="ml-auto text-green-500 font-bold">Excelente</p>
            )}
        </>
    );
}
