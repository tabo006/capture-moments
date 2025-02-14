import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Confirmation = () => {
    return (
        <div className="App">
          <NavBar />
          <header className="App-" style={{height: "80vh", textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>

            <h2 style={{marginBottom: "3%"}}>Booking Confirmation</h2>
          <div class="card text-center" style={{width: "60%"}}>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">Thank you for booking an photoshoot with capture moments. We are looking forward to turning your 
                        imagination into a reality.
                    </p>
                    <a href="#" class="btn btn-primary">Reschedule</a>
                </div>
                <div class="card-footer text-body-secondary">
                    <b>Date: 12/12/2021 | Time: 12:00 PM</b>
                </div>
            </div>
          </header>
          <Footer />  
        </div>
      );
};

export default Confirmation;