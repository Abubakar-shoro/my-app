// Uses the IMDB API endpoints you provided.
const App_url = "668a17f38270c9916d2dad72fef9e390";
const Base_url = "https://api.themoviedb.org/3";


export const PopularMovies = async () => {
    const response = await fetch(`${Base_url}/movie/popular?api_key=${App_url}`)
    const data = await response.json()
    return data.results;
};
export const SearchMovies = async (query) => {
    const response = await fetch(`${Base_url}/search/movie?api_key=${App_url}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results;
};