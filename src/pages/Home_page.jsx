
import MovieCards from "../Components/MovieCard"
import { useState, useEffect } from "react";
import "../css/Home_page.css";
import { SearchMovies, PopularMovies } from "../Service/api";


function Home() {

    const [SearchQuery, SetSearch] = useState("");
    const [movies, SetMovies] = useState([]);
    const [error, SetError] = useState(null);
    const [loading, SetLoading] = useState(true);


    useEffect(() => {
        const LoadPopularMovies = async () => {
            try {

                const data = await PopularMovies();
                SetMovies(data);
            } catch (error) {
                console.log(error);
                SetError("Failed to fetch popular movies. Please try again later.");
            }
            finally {
                SetLoading(false);
            }
        };
        LoadPopularMovies();
    }, []);


    const HandleSearch = async (e) => {
        e.preventDefault();
        if (!SearchQuery.trim()) {
            SetError("Please enter a movie name to search");
            return;
        }
        SetLoading(true);
        SetError(null);
        try {
            const data = await SearchMovies(SearchQuery);
            SetMovies(data);
        } catch (error) {
            console.log(error);
            SetError("Failed to fetch search results. Please try again.");
        } finally {
            SetLoading(false);
        }
    }

    return (


        <div className="Home">
            <form className="search_form" onSubmit={HandleSearch}>
                <input type="text" placeholder="Search for moivies..." className="Search_moive" value={SearchQuery} onChange={(e) => SetSearch(e.target.value)} />
                <button type="submit" className="search-btn" >Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ?(  <p>Loading...</p> ):
            ( 
                <div className="movie-grid">
                    {movies.map((movie) =>
                        (<MovieCards movie={movie} key={movie.id} />

                        ))}

                </div>)}

        </div>


    );
}

export default Home;