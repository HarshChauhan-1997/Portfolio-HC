import React from 'react'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/harsh-chauhan-570b4826a/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Harshch33595012"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://m.facebook.com/people/Harsh-Chauhan/100005771863596/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/harsh_chauhan1234?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  )
}

export default SocialMediaIcons
