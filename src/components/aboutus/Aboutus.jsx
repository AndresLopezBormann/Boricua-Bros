import React from 'react'
import "./Aboutus.css"
import { FiAward } from 'react-icons/fi'

import Plantain from '../../assets/plantain.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Us</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={Plantain} alt =""/>
          </div>
        </div>
        <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Restaurant Award</h5>
            <small>Place to celebrate and show off Awards</small>
          </article>
          <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Restaurant Award</h5>
            <small>Place to celebrate and show off Awards</small>
          </article>
          <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Restaurant Award</h5>
            <small>Place to celebrate and show off Awards</small>
          </article>
        </div>
        </div>
      </div>

    </section>
    
  )
}

export default About