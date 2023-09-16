import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
    <a className="hover:opacity-50 transition duration-500" href="www.linkedin.com/in/harsh-chauhan-0909" target="_blank" rel="noreferrer">
        <img src={"./src/linkedin.png"} alt="linkedin" />
    </a>
    <a className="hover:opacity-50 transition duration-500" href="https://twitter.com/Harshch33595012" target="_blank" rel="noreferrer">
        <img src={"./src/twitter.png"} alt="twitter" />
    </a>
    <a className="hover:opacity-50 transition duration-500" href="https://m.facebook.com/people/Harsh-Chauhan/100005771863596/" target="_blank" rel="noreferrer">
        <img src={"./src/facebook.png"} alt="facebook" />
    </a>
    <a className="hover:opacity-50 transition duration-500" href="https://instagram.com/harsh_chauhan1234?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer">
        <img src={"./src/instagram.png"} alt="instagram" />
    </a>
    </div>
  )
}

export default SocialMediaIcons;