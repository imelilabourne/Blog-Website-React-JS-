import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './style.css'
/**
* @author
* @function navigation
**/

const Navigation = (props) => {
  return(
    <header className='header'>
        <nav className='headerMenu'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>

        <div className="search">
          <input type="text" placeholder="Search"></input>
          <span className="icon"><FaSearch size={28} /></span>
        </div>
        {/* <div>
        <a href="#">Social Media Links</a>
        </div> */}
    </header>
   )

 }

export default Navigation