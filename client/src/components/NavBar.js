import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/logo-duckies.png";



function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width="45"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLinks" aria-controls="navbarNavLinks" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavLinks">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/home">Dashboard</Link>
                    </div>
              </div>
            </div>
        </nav>

    )
}

export default NavBar;