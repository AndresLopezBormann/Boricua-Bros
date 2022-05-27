import React from 'react'
import './Header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenido a</h5>
        <h1>Boricua Bros</h1>
        <h5 className="description">Puerto Rican Cuisine</h5>
        <HeaderSocials/>
        <div className="logo">
        </div>
        <div className='slogan'>LOGO GOES HERE</div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    )
}

export default Header