
export default function Media({ src }){

    if (!src) return null;

    const lowerSrc = src.toLowerCase();

    if (lowerSrc.endsWith(".mp4")) {
        return (
        <video controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={src} type="video/mp4" />
        </video>
        );
    }

    if (lowerSrc.endsWith(".mp3")) {
        return (
        <audio controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={src} type="audio/mpeg" />
        </audio>
        );
    }

    return (
        <img
        src={src}
        alt="Imagen relacionada con la pregunta"
        style={{ width: "100%", marginTop: "20px" }}
        />
    );
}
