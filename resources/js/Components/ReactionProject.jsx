export default function ReactionProject({ reaction }) {
    return (
        <>
            {
                reaction === "Bueno" ? (
                    <img
                        className="w-6"
                        src="/img/reactions/bueno.svg"
                        alt="bueno"
                    />
                ) : reaction === "Indiferente" ? (
                    <img
                        className="w-6"
                        src="/img/reactions/indiferente.svg"
                        alt="indiferente"
                    />
                ) : (
                    <img
                        className="w-6"
                        src="/img/reactions/malo.svg"
                        alt="malo"
                    />
                )
            }
        </>
    )
}