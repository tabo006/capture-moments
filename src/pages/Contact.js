import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="App">
          <NavBar />
          <header className="Contact-header" style={{height: "75vh"}}>
            <div style={{textAlign: "left", padding: "10px", height: "15vh", alignItems: "center", display: "flex", justifyContent: "center", marginTop: "5%"}}>
                    <h2 style={{paddingLeft:"2%"}}><b>Contact Us:</b> </h2>
            </div>
            <div class="card" style = {{width: "80%", margin: "auto"}}>
                <div class="card-body" style={{backgroundColor: "#e9ecef"}}>
                <div class="row" >
                    <div class="col-sm-6 mb-3 mb-sm-0" >
                        <div class="card" style = {{height: "30vh", color: "white", backgroundColor: "black"}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{paddingTop:"12%"}}>Payment Support</h3>
                            <p class="card-text">payment.support@capturemomemts.com </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card" style = {{height: "30vh", color: "white", backgroundColor: "black"}} >
                        <div class="card-body" style = {{textAlign: "center"}}>
                            <h3 class="card-title" style={{paddingTop:"12%"}}>Booking Support</h3>
                            <p class="card-text">order.support@capturemomemts.com </p>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-footer text-body-secondary" style={{ height: "8vh", paddingTop: "1.5%", backgroundColor: "#e9ecef", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "black", margin: 0 }}><b>General Support:</b> general.support@capturemoments.com</p>
                <button type="button" style={{marginLeft: "4%"}} className="btn btn-outline-dark">Call Us: +1 999-999-9999</button>
                </div>
            </div>
            
          </header>
          <Footer />  
        </div>
      );
};

export default Contact;