import logo from './logo.svg';
import './App.css';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Card from './Card.jsx';
import About from './About';
import Carousel from './Carousel';
import data from './Data.json';
import Footer from './Footer.jsx';




function App() {
  return (
    <>
    

      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about us' element={<About />} />
      </Routes>
{/*     
<div className='container bg_demo' style={{height:'700px'}}>
<div className='blureffect'> */}
{/* 
</div>
</div> */}
    
      
    </>
  );
}

export default App;
