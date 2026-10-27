import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({})
    let { id } = useParams()

    useEffect(() => {
        let myMovie = {
            id: 2,
            title: "Raiders of the Lost Arc",
            release_date: "1981-06-12",
            runtime: 115,
            rating: "PG-13",
            desctiption: "a long description",
        }
        setMovie(myMovie)
    }, [id])

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime}, {movie.rating}</em></small>
            <hr />
            <p>{movie.desctiption}</p>
        </div>
    )
}

export default Movie;
