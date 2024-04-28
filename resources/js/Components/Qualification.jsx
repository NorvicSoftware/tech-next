export default function Qualification({ qualification }) {
    return (
        <>
            {qualification < 50 && (
                <p className="ml-auto text-red-600">Muy Malo</p>
            )}
            {qualification >= 50 && qualification < 75 && (
                <p className="ml-auto text-yellow-500">Regular</p>
            )}
            {qualification >= 75 && qualification < 85 && (
                <p className="ml-auto text-lime-300">Bueno</p>
            )}
            {qualification >= 85 && qualification < 93 && (
                <p className="ml-auto text-lime-600">Muy Bueno</p>
            )}
            {qualification >= 93 && (
                <p className="ml-auto text-green-500">Excelente</p>
            )}
        </>
    );
}
