import FaceRegular from "./Icons/FaceRegular";
import FaceSad from "./Icons/FaceSad";
import FaceSimle from "./Icons/FaceSmile";

export default function ScoreButton({  className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={"w-16 h-16 rounded-full border-2 dark:border-white border-black p-2 dark:bg-gray-900 bg-slate-300" + className}
        >
            {children}
        </button>
    );
}
