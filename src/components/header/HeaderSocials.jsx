import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vi%C3%AAn-nguy%E1%BB%85n-a0537b259/" ><BsLinkedin/></a>
        <a href="https://github.com/vanvien2802" ><BsGithub/></a>
        <a href="https://www.facebook.com/VienNg02" ><FaFacebookF/></a>
    </div>
  )
}

export default HeaderSocials