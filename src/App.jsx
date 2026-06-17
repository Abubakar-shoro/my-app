import MovieCards from "./Components/MovieCard";
import Home from "./pages/Home_page";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import NavBar from "./pages/NavBar";
import { MovieProvider } from "./Context/MovieContext";
import "./css/index.css";
function App() {

  return (

    <>
      <MovieProvider>

        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>

      </MovieProvider>
    </>
  );
}

export default App;