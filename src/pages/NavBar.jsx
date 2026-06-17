import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {

    return (
        <nav className="navbar">
            <h1>Movie App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar;