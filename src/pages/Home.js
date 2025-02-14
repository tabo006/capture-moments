import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className='background-image'>
        <div className="fixed-top-left-box" style={{marginTop: "40px", left: "4%"}}>
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h4 class="card-title">Capture Moments</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Photography Service</h6>
                    <p class="card-text small">Make your Imagination a Reality</p>
                    <Link to="/booking" className=' btn btn-secondary btn-lg' >Book Photoshoot Now</Link>
                </div>
            </div>
        
        </div>
          
        </div>
        <div class>
        </div>
      </header>
      <Footer />  
    </div>
  );
}

export default Home;