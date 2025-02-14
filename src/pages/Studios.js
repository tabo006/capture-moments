import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import studioImage1 from "../images/studio1.png";
import studioImage2 from "../images/studio2.png";
import studioImage3 from "../images/studio3.png";

const Studios = () => {
    return (
        <div className="App">
          <NavBar />
          <header className="Studios-header">
        
                <div className="studio-container" style={{ backgroundImage: `url(${studioImage1})` }}>
                    <div className="fixed-top-left-box">
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body" style={{backgroundColor: "#e9ecef"}}>
                                <h5 class="card-title">Lumière Studio</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Where Light Meets Art</h6>
                                <p class="card-text">Lumière Studio is designed for professionals and creatives who seek the perfect balance of natural and studio lighting. With floor-to-ceiling windows, customizable backdrops, and top-tier photography equipment, this space offers an elegant and versatile environment for solo, group, and commercial shoots.</p>
                                <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>Address: </b>157 Alexander St. Suite 200 V6A 1B8</li>
                                        <li class="list-group-item"><b>Opening Hours: </b>Wed - Sun 8:30am - 8:00pm</li>
                                        <li class="list-group-item">                                
                                            <a href="#" class="card-link">Maps</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="studio-container" style={{ backgroundImage: `url(${studioImage2})` }}>
                <div className="fixed-top-left-box">
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body" style={{backgroundColor: "#e9ecef"}}>
                                <h5 class="card-title"> Urban Frame Studios</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Capture the Essence of the City</h6>
                                <p class="card-text">Located in the heart of the city, Urban Frame Studios blends industrial charm with modern aesthetics. Featuring exposed brick walls, large industrial windows, and dynamic set options, this studio is ideal for fashion, editorial, and lifestyle photography sessions.</p>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>Address: </b>157 Alexander St. Suite 200 V6A 1B8</li>
                                        <li class="list-group-item"><b>Opening Hours: </b>Wed - Sun 8:30am - 8:00pm</li>
                                        <li class="list-group-item">                                
                                            <a href="#" class="card-link">Maps</a>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="studio-container" style={{ backgroundImage: `url(${studioImage3})` }}>
                    <div className="fixed-top-left-box">
                            <div class="card" style={{width: "18rem"}}>
                                <div class="card-body" style={{backgroundColor: "#e9ecef"}}>
                                    <h5 class="card-title">Golden Hour Loft</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Timeless Moments in Every Frame</h6>
                                    <p class="card-text">Golden Hour Loft is a warm and inviting photography space designed to emulate the beauty of golden-hour lighting at any time of day. With a selection of soft light panels, artistic props, and rustic wood interiors, it’s the perfect setting for intimate portraits, maternity shoots, and elegant branding sessions.</p>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>Address: </b>157 Alexander St. Suite 200 V6A 1B8</li>
                                        <li class="list-group-item"><b>Opening Hours: </b>Wed - Sun 8:30am - 8:00pm</li>
                                        <li class="list-group-item">                                
                                            <a href="#" class="card-link">Maps</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
            </div>

          </header>
          <Footer />  
        </div>
      );
};

export default Studios;