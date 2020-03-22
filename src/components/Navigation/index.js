import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import './style.css';
import contactus from '../../containers/ContactUS';
import {NavLink} from 'react-router-dom';
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
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
          </nav>


          <div className="search">
            <form onSubmit={submitSearch}>
              <input type="text" className={searchClass} placeholder="Search"></input>
              <span className="searchicon" onClick={openSearch}><FaSearch/></span>
              
            </form>
          </div>
          {/* <div>
          <a to='/'>Social Media Links</a>
          </div> */}
      </header>
      {/* <div className="bg">
          <p>You clicked {count} times</p>
          <button onClick={click}>Click Up</button>
      </div> */}
    </div>
   )

 }

export default Navigation