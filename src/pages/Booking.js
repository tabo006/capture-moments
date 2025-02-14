import React, { useState } from "react";
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "react-datepicker/dist/react-datepicker.css"
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import { useNavigate } from "react-router-dom";


function Booking(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("12:00"); 
    const navigate = useNavigate();

    const handleDateChange = (date) => {
      setSelectedDate(date);
      console.log("Selected Date:", date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        console.log("Selected Time:", time);
      };
    const handleBooking = () => {
        // Perform any necessary actions before navigation
        navigate("/confirmation");
      };
      const handleContact = () => {
        // Perform any necessary actions before navigation
        navigate("/contact");
      };

    return (
        <div className="App">
          <NavBar />
          <header className="App-booking App-header">
                <div className= "booking-box">
                    <h2 style={{textAlign: "left", margin: '1%'}}>Book an Appointment</h2>
                    <div class="row g-3" style={{padding: "1%"}}>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Phone Number" aria-label="Last name" />
                    </div>                    
                    </div>
                    <div class="row g-3" style={{padding: "1%"}}>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Group Size</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                            <option value="3">6</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Service Type</option>
                            <option value="1">Solo Shoot</option>
                            <option value="2">Group Shoot</option>
                            <option value="3">Event Shoot</option>
                            <option value="3">Cutsom Shoot</option>
                        </select>
                    </div>
                    <div class="col">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Location</option>
                            <option value="1">LA Studio</option>
                            <option value="2">NYC Studio</option>
                            <option value="3">Texas Studio</option>
                            <option value="3">Atl Studio</option>
                            <option value="3">Own Location</option>
                        </select>
                    </div>                    
                    </div>
                    <div class="row g-3" style={{padding: "1%"}}>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Account ID" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Email Address" aria-label="Last name" />
                    </div>                 
                    </div>
                    <div style={{padding: "1%"}}>
                    <Calendar
                        onChange={handleDateChange} // Event handler for date changes
                        value={selectedDate} // Selected date
                    />
                    <h5 style={{marginTop: "1%"}}>Select Time:</h5>
                    <TimePicker onChange={handleTimeChange} value={selectedTime} disableClock={true} />
                    </div>

                    <div class="form-floating"  style={{padding: "1%"}}>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px", marginBottom: "20px", marginTop: "10px"}}></textarea>
                        <label  style={{padding: "2%"}} for="floatingTextarea2">Additional Requirements</label>
                    </div>
                    <div class="row g-2" style={{padding: "1%"}}>
                    <button type="button" style={{width: '50%', marginBottom: '20px'}} onClick={handleBooking} class="btn btn-secondary">Book</button>
                    <button type="button" style={{width: '50%', marginBottom: '20px'}} onClick={handleContact} class="btn btn-primary">Call Us to Book</button>
                    </div>
                    
                </div>
            </header>
          <Footer />  
        </div>
      );
};

export default Booking;