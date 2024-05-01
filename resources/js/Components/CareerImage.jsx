export default function CareerImage({src = '' }) {
    return(
        <img
        src={src}
        alt= ''
        className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
        />
    );
}