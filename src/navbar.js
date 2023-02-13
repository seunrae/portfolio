import React from "react";
import {Link} from "react-router-dom";
import './App.css';

function Navbar(){
    return (
        <div className="nav-div">
        <nav className="navbar navbar-expand-lg bg-gradient">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}

export default Navbar;