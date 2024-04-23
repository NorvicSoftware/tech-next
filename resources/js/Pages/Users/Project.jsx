import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import ScoreReaction from "@/Components/ScoreReaction";


const Project = ({ project }) => {
    return (
        <UserLayout>
            <div className="max-w-3xl mx-auto p-6 grid justify-center my-5 border-4 rounded-xl">
                <div className="space-y-4 text-center text-2xl">
                    <div className="flex gap-3">
                        <ScoreReaction/>
                        <ScoreReaction image="./images/face-angry-solid.svg" />
                        <ScoreReaction image="./images/face-angry-solid.svg" />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Project;
