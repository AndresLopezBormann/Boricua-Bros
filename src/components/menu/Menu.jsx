import React from 'react'
import Plantain from './../../assets/plantain.jpg'
import './Menu.css'

const Menu = () => {
  return (
    <section id='menu'>
      <h5>Check Out Our Fresh</h5>
      <h2>Menu</h2>  
      <div className="container menu__container">
        <article className='menu__item'>
          <div className="menu__item-image">
            <img src={Plantain} alt=""/>
          </div>
            <h3>Plantains</h3>
            <div className='menu__item-CTA'><a href='https://www.healthline.com/health/food-nutrition/plantain-nutrition-benefits' target="_blank" className='btn'>Nutritional Facts</a>
            <a href='https://www.thespruceeats.com/fried-ripe-plantains-recipe-2138201' target="_blank" className='btn btn-primary'>How it is prepared</a>
            </div> 
        </article>

        <article className='menu__item'>
          <div className="menu__item-image">
            <img src={Plantain} alt=""/>
          </div>
            <h3>Plantains</h3>
            <div className='menu__item-CTA'><a href='https://www.healthline.com/health/food-nutrition/plantain-nutrition-benefits' target="_blank" className='btn'>Nutritional Facts</a>
            <a href='https://www.thespruceeats.com/fried-ripe-plantains-recipe-2138201' target="_blank" className='btn btn-primary'>How it is prepared</a>
            </div> 
        </article>

        <article className='menu__item'>
          <div className="menu__item-image">
            <img src={Plantain} alt=""/>
          </div>
            <h3>Plantains</h3>
            <div className='menu__item-CTA'><a href='https://www.healthline.com/health/food-nutrition/plantain-nutrition-benefits' target="_blank" className='btn'>Nutritional Facts</a>
            <a href='https://www.thespruceeats.com/fried-ripe-plantains-recipe-2138201' target="_blank" className='btn btn-primary'>How it is prepared</a>
            </div> 
        </article>

        <article className='menu__item'>
          <div className="menu__item-image">
            <img src={Plantain} alt=""/>
          </div>
            <h3>Plantains</h3>
            <div className='menu__item-CTA'><a href='https://www.healthline.com/health/food-nutrition/plantain-nutrition-benefits' target="_blank" className='btn'>Nutritional Facts</a>
            <a href='https://www.thespruceeats.com/fried-ripe-plantains-recipe-2138201' target="_blank" className='btn btn-primary'>How it is prepared</a>
            </div> 
        </article>

      </div>
    </section>
  )
}

export default Menu

