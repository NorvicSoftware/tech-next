import FaceRegular from "./FaceRegular";
import FaceSad from "./FaceSad";
import FaceSimle from "./FaceSmile";

export default function ScoreReaction({  className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={"w-16 h-16 rounded-full border-2 border-black p-2" + className}
        >
            {children}
        </button>
    );
}
