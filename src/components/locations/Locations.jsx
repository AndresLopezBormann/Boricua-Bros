import React from 'react'
import "./Locations.css"

const Locations = () => {
  return (
    <section id='locations'>
      <h5>Come check us out at</h5>
      <h2>Locations</h2>
      <div className='container location__container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.67081637201!2d-95.25799014884063!3d38.95434805108954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf6f32f3a8d673%3A0x53714e21ab238228!2sUniversity%20of%20Kansas!5e0!3m2!1sen!2sus!4v1657068274614!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </div>
    </section>
  )
}

export default Locations