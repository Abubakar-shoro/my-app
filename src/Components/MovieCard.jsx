import "../css/Home_page.css";
import { useFavourites } from "../Context/MovieContext";

function MovieCards({ movie }) {
    const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();
    const favourite = isFavourite(movie.id);


    function FavouriteClick(e) {
        e.stopPropagation();
        if (favourite) {
            removeFromFavourites(movie.id);
        } else {
            addToFavourites(movie);
        }
    }


    return (
        <div className="movie-Card">

            <div className="moive-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

                <div className="movie-overlay">
                    <button className="movie-btn" style={{ backgroundColor: favourite ? "red" : "white" }} onClick={FavouriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie_info">
                <h3>{movie.title}</h3>
                <p>
                    {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
                </p>

            </div>

        </div>
    );
}
export default MovieCards;