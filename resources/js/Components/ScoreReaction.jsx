import React, { useState } from "react";

export default function ScoreReaction({ className = "", image }) {
    const [score, setScore] = useState(0);
    const [scoreactive, setScoreactive] = useState(false);

    function handleClick() {
        if (scoreactive) {
            setScoreactive(false);
            setScore(score - 1);
        } else {
            setScoreactive(true);
            setScore(score + 1);
        }
    }

    return (
        <div>
            <button
                className={"dark:text-white " + className}
                onClick={handleClick}
            >
                {score}
            </button>
        </div>
    );
}
