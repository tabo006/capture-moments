import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer py-3" style={{ backgroundColor: '#FCFCFC', paddingLeft: '20px', paddingRight: '20px', height: '60px', marginTop: '10px' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link className="nav-link" to="/" style={{ color: 'black' }}>About Us</Link>
          </div>
          <div className="col">
            <Link className="nav-link" to="/contact" style={{ color: 'black' }}>Contact Us</Link>
          </div>
          <div className="col">
            <Link className="nav-link" to="/services" style={{ color: 'black' }}>Services</Link>
          </div>
          <div className="col">
            <Link className="nav-link" to="/studios" style={{ color: 'black' }}>Portfolio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;