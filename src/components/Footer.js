import React from 'react'

import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mx-auto bg-white py-8 border-t border-gray-400">
      <img src={Logo} alt="logo" className="h-auto max-h-full object-cover" />
      <h2 className="text-base md:text-xl text-center leading-7 font-bold tracking-tight text-gray-900 mt-4">Made with <span className="text-red-600" role="img" aria-label="corazón">♥️</span> supporting local economies</h2>
    </footer>
  )
}

export default Footer
