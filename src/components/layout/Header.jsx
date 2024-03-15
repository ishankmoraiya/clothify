import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div style={{marginTop: 0, marginLeft: 0, marginRight: 0}} >
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"1rem" }}>
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Clothify <span style={{fontSize:"0.7rem" ,color:"lightgrey"}}>ERP</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
             
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product_layout">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/OrderCalenderview">
                  Calender
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
