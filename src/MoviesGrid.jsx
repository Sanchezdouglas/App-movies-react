import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import style from "./MoviesGrid.module.css";

export function MoviesGrid() {
    return (
    <ul className={style.moviesGrid}>
        {movies.map((movie) => (
           <MovieCard key={movie.id} movie={movie}/>
        ))}
    </ul>
    );
}