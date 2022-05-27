import React from 'react'
import { GrTwitter } from 'react-icons/gr'
import { FaTiktok } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='#facebook' target="_blank"><AiFillFacebook/></a>
        <a href='#twitter'><GrTwitter/></a>
        <a href='#tiktok' target="_blank"><FaTiktok/></a>
    </div>
  )
}

export default HeaderSocials