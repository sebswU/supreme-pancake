import React from "react";

//make website not ugly
import "bootstrap/dist/css/bootstrap.css";

//utilize react router
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
          <img style={{"width" : 25 + '%'}} src="https://imgs.search.brave.com/R_J99aSUQcMwPdsTVsZQIBXSBIIbpAxXqmSLQrXfcSY/rs:fit:501:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/cG8wZG80Rm5JeXVo/eFJSVW5GV2p3SGFI/QSZwaWQ9QXBp"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Create Record
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
   }