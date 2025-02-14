import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import logo from '../images/logo.png';



const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FCFCFC', paddingLeft: '20px', paddingRight: '20px', height:'60px' }}>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="App Logo" style={{ height: '40px', width: '100px'}} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/booking" style={{color: 'black'}}>Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/services' style={{color: 'black'}}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/studios' style={{color: 'black'}}>Studios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/account' style={{color: 'black'}}>Sign Up </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact' style={{color: 'black'}}>Contact Us</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;