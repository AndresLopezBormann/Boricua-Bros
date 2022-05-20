import React from "react";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Locations from "./components/locations/Locations";
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import Testimonials from "./components/testimonials/Testimonials";


const App = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Locations/>
        <Menu/>
        <Aboutus/>
        <Testimonials/>
        <Contactus/>
        <Footer/>
    </>
  )
}

export default App