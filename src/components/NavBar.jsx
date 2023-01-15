import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <Link to="/" className="navbar-brand"> Dashboard </Link>
            </div>

        </nav>
    )
}

export default NavBar;
