import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";



function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">Google Books         </Link>
                <Link className="nav-link" to="/saved">   Saved</Link>
            </nav>
        </div>
    )
}

export default Nav;