import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../../assets/frontend_assets/logo.png'
import search_icon from '../../assets/frontend_assets/search_icon.png'
import basket_icon from '../../assets/frontend_assets/basket_icon.png'

function Navbar() {

    const [menu, setMenu] = useState("Home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='navbar-menu'>
            <li className={menu === "Home" ? "active" : ""} onClick={() => handleMenuClick("Home")}>Home</li>
            <li className={menu === "Menu" ? "active" : ""} onClick={() => handleMenuClick("Menu")}>Menu</li>
            <li className={menu === "Mobile App" ? "active" : ""} onClick={() => handleMenuClick("Mobile App")}>Mobile App</li>
            <li className={menu === "Contact Us" ? "active" : ""} onClick={() => handleMenuClick("Contact Us")}>Contact Us</li>
        </ul>
        <div className='navbar-right'>
            <img src={search_icon} alt="" />
            <div className='navbar-search-icon'>
                <img src={basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button>Sign in</button>

        </div>
    </div>

  )
}

export default Navbar