import React, {useState} from 'react'
import './navbar.css'
import {WiDayFog} from 'react-icons/wi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'

const Navbar = () => {
    const [active, setActive] = useState('navbar')

    // Function to toggle navbar
    const showNav = () => {
        setActive('navbar activeNavbar')
    }

    // Function to close navbar
    
const closeNav = () => {
        setActive('navbar')
    }


    return (
        <section className="navbar-section">
            <header className="header flex">
                <div className="logo-container">
                    <a href="#" className="logo flex">
                        <h1><WiDayFog className="icon"/> Travel.</h1>
                    </a>
                </div>


                <div className={active}> 
                <ul className="navbar-lists flex">
                    
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Home</a>
                    </li>
                   
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Shop</a>
                    </li>
                   
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Services</a>
                    </li>
                   
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">About</a>
                    </li>
                    
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Pages</a>
                    
                    </li>

                    <li className="navbar-item">
                       <a href="#" className="navbar-link">Contact</a> 
                    
                    </li>
                
                    <button className="btn">
                        <a href="#"> Book Now</a>
                    </button>
                </ul>

                <div onClick={closeNav} className="closeNavbar">
                <AiOutlineClose className="icon"/>
                </div>
                </div>

                <div onClick={showNav} 
                className="toggleNavbar">
                    <BsThreeDotsVertical className="icon"/>
                </div>
            </header>
        </section>
        
    )
}


export default Navbar