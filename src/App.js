import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route,createBrowserRouter,createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';  
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Contact from './pages/Contact';
import Studios from './pages/Studios';
import Services from './pages/Services';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />

    <Route path='/booking' element={<Booking/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/confirmation' element={<Confirmation/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/studios' element={<Studios/>} />
    <Route path='/account' element={<Account/>} />
      </>

  )
);

function App() {
  return (
    <body>
    <RouterProvider router={router} />
    </body>
  );
}

export default App;
