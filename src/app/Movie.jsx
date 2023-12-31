
import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, id, poster_path, release_date }) => {
    const imagePath = "https://image.tmdb.org/t/p/original";
    return (
        <div>

            <Link href={`${id}`}>
                <Image src={imagePath + poster_path} width={500} height={700} alt={title} />
                <h1>{title}</h1>
                <h2>{release_date}</h2>
            </Link>

        </div>
    )
}
export default Movie;