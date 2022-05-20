import React , {useState} from 'react'
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaRegSmileBeam } from 'react-icons/fa'
import { GiMeal } from 'react-icons/gi'
import { HiOutlineAtSymbol } from 'react-icons/hi'
import { VscCallOutgoing } from 'react-icons/vsc'

const Navbar = () => {
  const [activeNav , setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#locations' onClick={() => setActiveNav('#locations')} className={activeNav === '#locations' ? 'active' : ''}><BiMap/></a>
      <a href='#menu' onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active' : ''}><GiMeal/></a>
      <a href='#aboutus' onClick={() => setActiveNav('#aboutus')} className={activeNav === '#aboutus' ? 'active' : ''}><HiOutlineAtSymbol/></a>
      <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><FaRegSmileBeam/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><VscCallOutgoing/></a>
    </nav>
  )
}

export default Navbar