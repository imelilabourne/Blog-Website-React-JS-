import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './style.css'
/**
* @author
* @function navigation
**/

const Navigation = (props) => {

  const submitSearch = (e) => { 
    e.preventDefault();
    alert("Search Successfully");
  }

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState(false);

  const click = () => setCount(count + 1);

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchinput active':'searchinput';


  return(
    <div>
      <header className='header'>
          <nav className='headerMenu'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
          </nav>


          <div className="search">
            <form onSubmit={submitSearch}>
              <input type="text" className={searchClass} placeholder="Search"></input>
              <span className="searchicon" onClick={openSearch}><FaSearch/></span>
              
            </form>
          </div>
          {/* <div>
          <a href="#">Social Media Links</a>
          </div> */}
      </header>
      <div className="bg">
          <p>You clicked {count} times</p>
          <button onClick={click}>Click Up</button>
      </div>
    </div>
   )

 }

export default Navigation