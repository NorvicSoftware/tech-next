export default function ScoreProject({ reaction, scores }) {
    return (
        <div className="flex items-center gap-2">
            {
                reaction === "Bueno" ? (
                    <img
                        className="w-7"
                        src="/img/reactions/bueno.svg"
                        alt="bueno"
                    />
                ) : reaction === "Indiferente" ? (
                    <img
                        className="w-7"
                        src="/img/reactions/indiferente.svg"
                        alt="indiferente"
                    />
                ) : (
                    <img
                        className="w-7"
                        src="/img/reactions/malo.svg"
                        alt="malo"
                    />
                )
            }

            <p>
                {
                    scores.filter(
                        (score) =>
                            score.reaction === reaction
                    ).length
                }
            </p>
        </div>
    )
}