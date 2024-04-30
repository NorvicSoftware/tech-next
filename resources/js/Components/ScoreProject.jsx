export default function ScoreProject({ reaction, scores }) {
    return (
        <p>
            {
                scores.filter(
                    (score) =>
                        score.reaction === reaction
                ).length
            }
        </p>
    )
}