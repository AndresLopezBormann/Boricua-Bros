import React from 'react'
import "./Testimonials.css"
import {FiUser} from 'react-icons/fi'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>A Taste Of Home</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial__container">
        <div className="testimonial__email">
        <article className='testimonial__details'>
          <FiUser className='testimonial__details-icon'/>
          <div>
            <h4>Customer 1</h4>
            <small className='textlight'>Authentic Puerto rican Restaurant, friendly staff, and delicious food. The atmosphere is exactly what you would experience in many restaurants in Puerto Rico. Well worth the visit if you are in the area.
</small>
          </div>
        </article>
        </div>

        <div className="testimonial__phone">
        <article className='testimonial__details'>
          <FiUser className='testimonial__details-icon'/>
          <div>
            <h4>Customer 2</h4>
            <small className='textlight'>Puerto Rican food in KS? Yes. Big, authentic YES! Get here and try it yourself, ask questions, explore! Mufongo was so good!
</small>
          </div>
        </article>
        </div>

        <div className="testimonial__twitter">
        <article className='testimonial__details'>
          <FiUser className='testimonial__details-icon'/>
          <div>
            <h4>Customer 3</h4>
            <small className='textlight'>My husband is from Puerto Rico and we have been looking for Puerto Rican food for a while in the KC area until we discovered this hidden gem!!! I'm new to boricuan food but this shouldn't stop you from trying new things. All the staff at Boricua Bros were above and beyond to explain to me all of their dishes and their customer service was AMAZING!!!
</small>
          </div>
        </article>
        </div>

        <div className="testimonial__facebook">
        <article className='testimonial__details'>
          <FiUser className='testimonial__details-icon'/>
          <div>
            <h4>Customer 4</h4>
            <small className='textlight'>Excellent Puerto Rican foods. They have all my favorite Puerto Rican foods with all the right seasonings. Just like my mom's. Awesome portions at a reasonable price.
</small>
          </div>
        </article>
        </div>
      </div>      
      </section>
  )
}

export default Testimonials