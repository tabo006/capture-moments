import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Services = () => {
    const [isCollapsed1, setIsCollapsed1] = useState(false);
    const [isCollapsed2, setIsCollapsed2] = useState(false);
    const [isCollapsed3, setIsCollapsed3] = useState(false);
    const [isCollapsed4, setIsCollapsed4] = useState(false);
    return (
        <div className="Service">
          <NavBar />
          <header className="App-header">
            <div className="Service-Background" style={{marginBottom: "50px"}}>
                <h1 className="middle-h1">Learn More About our Services</h1>
                <div className="arrow-down"></div> 
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4" style={{paddingBottom: "30px", backgroundColor: "#e9ecef", paddingLeft: "50px", paddingRight: "50px"}}>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title"><b>Solo Shot</b></h3>
                    <p class="card-text">Capture your unique personality with our tailored solo photoshoots. Whether it’s for professional headshots, personal branding, or a creative portrait session, we ensure every shot reflects your style and individuality. Step into the spotlight and let us create stunning memories that truly represent you.</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Price: </b> $150</li>
                        <li class="list-group-item"><b>Length: </b>60 minutes</li>
                        <li class="list-group-item"><b>Location: </b> Studio</li>
                    </ul>
                    <div className="card-body">
                        <p className="d-inline-flex gap-1">
                            <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setIsCollapsed1(!isCollapsed1)}
                            >
                            Learn More
                            </button>
                        </p>
                        {isCollapsed1 && (
                            <div className="collapse show" id="collapseExample">
                            <div className="card card-body">
                                <p><strong>Perfect for professional headshots, personal branding, or creative solo portraits.</strong></p>
                                <ul>
                                    <li><strong>Camera Used:</strong> Canon EOS R5 / Sony A7R IV (High-resolution mirrorless)</li>
                                    <li><strong>Lenses:</strong> 85mm f/1.4 (Portrait), 50mm f/1.2 (Bokeh effect)</li>
                                    <li><strong>Backdrops:</strong> Choice of <b>2-3 backgrounds</b> (Neutral, Studio, Outdoor Look)</li>
                                    <li><strong>Lighting Setup:</strong> Softbox & Ring Light for a <b>flattering glow</b></li>
                                    <li><strong>Editing Software:</strong> Adobe Lightroom & Photoshop for <b>retouching & enhancement</b></li>
                                    <li><strong>Session Duration:</strong> <b>30-60 minutes</b></li>
                                    <li><strong>Delivery:</strong> <b>10-20 professionally edited images</b></li>
                                </ul>
                                <p><strong>🎯 Ideal For:</strong> LinkedIn headshots, modeling portfolios, graduation portraits, artistic solo shoots.</p>
                            </div>
                            </div>
                        )}
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title"><b>Group Shot</b></h3>
                    <p class="card-text">Celebrate togetherness with our group photoshoots, perfect for families, friends, or teams. We specialize in creating vibrant, fun, and heartwarming images that highlight your connections. Whether it’s a casual gathering or a formal session, we’ll deliver timeless photos you’ll cherish forever.</p>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Price: </b> $250</li>
                        <li class="list-group-item"><b>Length: </b>60 minutes</li>
                        <li class="list-group-item"><b>Location: </b> Studio</li>
                    </ul>
                    <div className="card-body">
                        <p className="d-inline-flex gap-1">
                            <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setIsCollapsed2(!isCollapsed2)}
                            >
                            Learn More
                            </button>
                        </p>
                        {isCollapsed2 && (
                            <div className="collapse show" id="collapseExample">
                            <div className="card card-body">
                                <p><strong>Capture memorable moments with friends, family, or colleagues.</strong></p>
                                <ul>
                                    <li><strong>Camera Used:</strong> Nikon Z9 / Canon EOS 5D Mark IV (Full-frame DSLR)</li>
                                    <li><strong>Lenses:</strong> 24-70mm f/2.8 (Versatile for groups), 35mm f/1.4 (Wider frame)</li>
                                    <li><strong>Backdrops:</strong> Choice of <b>3-5 setups</b> (Neutral, Nature, Urban, Custom Theme)</li>
                                    <li><strong>Lighting Setup:</strong> Umbrella & Softbox Lighting for <b>even exposure</b></li>
                                    <li><strong>Editing Software:</strong> Adobe Lightroom & Photoshop for <b>skin smoothing & color correction</b></li>
                                    <li><strong>Session Duration:</strong> <b>60-90 minutes</b></li>
                                    <li><strong>Delivery:</strong> <b>20-30 professionally edited images</b></li>
                                </ul>
                                <p><strong>🎯 Ideal For:</strong> Family portraits, team photos, engagement sessions, best friend shoots.</p>
                            </div>
                            </div>
                        )}
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title"><b>Event Shot</b></h3>
                    <p class="card-text">Relive your special moments with our professional event photography. From weddings and birthdays to corporate events and galas, we capture every detail, emotion, and celebration. Trust us to turn your events into stunning collections of memories you’ll treasure for years to come.</p>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Price: </b> $350</li>
                        <li class="list-group-item"><b>Length: </b>120 minutes</li>
                        <li class="list-group-item"><b>Location: </b> Event Location</li>
                    </ul>
                    <div className="card-body">
                        <p className="d-inline-flex gap-1">
                            <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setIsCollapsed4(!isCollapsed4)}
                            >
                            Learn More
                            </button>
                        </p>
                        {isCollapsed4 && (
                            <div className="collapse show" id="collapseExample">
                            <div className="card card-body">
                                <p><strong>Professional photography for birthdays, corporate events, weddings, and special celebrations.</strong></p>
                                <ul>
                                    <li><strong>Camera Used:</strong> Sony A7S III (Low-light specialist) / Canon EOS R6</li>
                                    <li><strong>Lenses:</strong> 24-70mm f/2.8 (General), 70-200mm f/2.8 (Telephoto for candid shots)</li>
                                    <li><strong>Lighting Setup:</strong> On-camera Flash & Softbox for <b>indoor and outdoor adaptability</b></li>
                                    <li><strong>Editing Software:</strong> Adobe Lightroom & Photoshop for <b>exposure correction & enhancements</b></li>
                                    <li><strong>Session Duration:</strong> <b>2-6 hours</b></li>
                                    <li><strong>Delivery:</strong> <b>50-100+ edited images</b> (depending on event duration)</li>
                                </ul>
                                <p><strong>🎯 Ideal For:</strong> Weddings, corporate events, birthday parties, live performances.</p>
                            </div>
                            </div>
                        )}
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title"><b>Custom Shot</b></h3>
                    <p class="card-text">Have a vision? Let’s bring it to life with our fully customizable photoshoots. From unique themes and locations to personalized props and styling, we collaborate closely with you to craft a shoot that’s as extraordinary as your imagination. Your creativity, our expertise.</p>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Price: </b> $500</li>
                        <li class="list-group-item"><b>Length: </b>120 minutes</li>
                        <li class="list-group-item"><b>Location: </b> Custom</li>
                    </ul>
                    <div className="card-body">
                        <p className="d-inline-flex gap-1">
                            <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setIsCollapsed3(!isCollapsed3)}
                            >
                            Learn More
                            </button>
                        </p>
                        {isCollapsed3 && (
                            <div className="collapse show" id="collapseExample">
                            <div className="card card-body">
                                <p><strong>Tailored photoshoots that match your vision—whether it’s a creative project, product photography, or themed concept shoot.</strong></p>
                                <ul>
                                    <li><strong>Camera Used:</strong> Hasselblad H6D-100c (Medium format for ultra-high quality) / Canon EOS R5</li>
                                    <li><strong>Lenses:</strong> 100mm Macro (Product), 16-35mm f/2.8 (Wide angle), 50mm f/1.2 (Portraits)</li>
                                    <li><strong>Backdrops:</strong> <b>Custom settings</b> (Studio, Green Screen, Outdoor, Artificial Sets)</li>
                                    <li><strong>Lighting Setup:</strong> Full Professional Setup (Softbox, Strobe Lights, RGB Color Lights)</li>
                                    <li><strong>Editing Software:</strong> Adobe Lightroom, Photoshop & Capture One for <b>detailed editing & effects</b></li>
                                    <li><strong>Session Duration:</strong> <b>Flexible (Based on project scope)</b></li>
                                    <li><strong>Delivery:</strong> <b>Custom quantity based on client needs</b></li>
                                </ul>
                                <p><strong>🎯 Ideal For:</strong> Magazine covers, advertising campaigns, product shoots, creative branding.</p>
                            </div>
                            </div>
                        )}
                        </div>
                </div>
            </div>
            </div>
          </header>
          <Footer /> 
        </div>

      );
};

export default Services;