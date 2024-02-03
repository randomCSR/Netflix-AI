import React from 'react'
import NetflixLogo from "../utils/NetflixLogo.png"

const Header = () => {
  return (
    <div className="absolute w-full bg-gradient-to-b from-black ... z-10">

    <div className="w-44  m-5">
        <img
        src={NetflixLogo }
        alt="background"
      />
    </div>
    </div>
  )
}

export default Header