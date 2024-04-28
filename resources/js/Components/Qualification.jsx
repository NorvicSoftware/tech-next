export default function Qualification({ qualification }) {
    return (
        <>
            {qualification < 75 && (
                <p className="ml-auto text-green-500">
                    Bueno
                </p>
            )}
            {qualification >= 75 &&
                qualification < 90 && (
                    <p className="ml-auto text-lime-500">
                        Muy Bueno
                    </p>
                )}
            {qualification >= 90 && (
                <p className="ml-auto text-orange-500">
                    Excelente
                </p>
            )}
        </>
    );
}