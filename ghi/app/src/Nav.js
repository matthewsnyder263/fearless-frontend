import React from 'react';


function Nav() {
    return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Conference GO!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li>
            <a className="nav-link active d-none" aria-current="page" href="new-location.html">New location</a>
            </li>
            <li>
            <a className="nav-link active d-none" aria-current="page" href="new-conference.html">New conference</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="new-presentation.html">New presentation</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </>
    );
  }

export default Nav;
