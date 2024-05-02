export default function ScoreProject({ reaction, scores }) {
    return (
        <p className="font-bold">
            {
                scores.filter(
                    (score) =>
                        score.reaction === reaction
                ).length
            }
        </p>
    )
}