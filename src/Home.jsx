import React from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import Carousel from './Carousel'
import data from './Data.json';
import Card from './Card'
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
// import Footer from './Footer';


function Home() {
  return (
    <>
    <Navbar/>
    
    
            
<Carousel data1={data[0]} data2={data[1]} data3={data[2]}/>

{
  data.map(e => (
    <Card data1={e} />
    ))
}

<Footer/>

    
    </>
  )
}

export default Home