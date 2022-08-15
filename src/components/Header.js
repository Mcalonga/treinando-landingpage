import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <header>MEDITATE</header>
        <div className='button-container'>
            <button className='but-1'> sobre </button>
            <button className='but-1'> contato </button>
            <button className='button-login'>Login</button>
            <button className='button-2'>CADASTRE-SE</button>
        </div>
    </div>
  )
}

export default Header