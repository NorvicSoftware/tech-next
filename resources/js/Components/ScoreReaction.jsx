import React, { useState } from "react";

export default function ScoreReaction({ className = "", nameScore }) {
    const { scores } = usePage().props;
    const projectScores = scores.reduce((acc, score) => {
        if (!acc[projectTitle]) {
            acc[projectTitle] = {
                bueno: 0,
                indiferente: 0,
                malo: 0,
                id: null,
            };
        }

        if (score.reaction === "Bueno") {
            acc[projectTitle].bueno += 1;
        } else if (score.reaction === "Indiferente") {
            acc[projectTitle].indiferente += 1;
        } else if (score.reaction === "Malo") {
            acc[projectTitle].malo += 1;
        }

        acc[projectTitle].id = score.id;

        return acc;
    }, {});

    return (
        <div>
            {Object.entries(projectScores).map(([scores], id) => (
                <div
                    className="text-xs sm:text-base text-black dark:text-white "
                    key={id}
                >
                    <p className="px-4 py-4">{scores.nameScore}</p>
                </div>
            ))}
            
        </div>
    );
}
