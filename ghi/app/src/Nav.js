import { NavLink, Link, Outlet } from 'react-router-dom';
import React from 'react';


function Nav() {
    return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="#" className="navbar-brand">Conference GO!</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to ="#" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li>
                <Link to="new-location.html" className="nav-link active d-none" aria-current="page">New location</Link>
                </li>
                <li>
                <Link to="new-conference.html" className="nav-link active d-none" aria-current="page">New conference</Link>
                </li>
                <li className="nav-item">
                <Link to="new-presentation.html" className="nav-link active" aria-current="page">New presentation</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <Outlet/>
    </>
    );
  }

export default Nav;
