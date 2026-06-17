import "../css/Favourite.css";
import { useFavourites } from "../Context/MovieContext";

function Favourites() {
    const { favourites, removeFromFavourites } = useFavourites();

    if (favourites.length > 0) {
        return (
            <div className="Favourite">
                <h3>Favourite Movies</h3>
                <div className="favourite-movies">
                    {favourites.map((movie) => (
                        <div key={movie.id} className="favourite-movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="favourite-movie-info">
                                <h4>{movie.title}</h4>
                                <button
                                    className="remove-favourite-btn"
                                    onClick={() => removeFromFavourites(movie.id)}
                                >
                                    ❤️ Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="Favourite">
            <h3>No favourite movies are yet </h3>
            <p>Start Adding... </p>
        </div>
    );
}

export default Favourites;