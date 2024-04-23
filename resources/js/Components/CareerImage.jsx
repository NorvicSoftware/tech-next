export default function CareerImage({src = '', alt = ''}) {
    return(
        <img
        src={src}
        alt={alt}
        className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4"
        />
    );
}