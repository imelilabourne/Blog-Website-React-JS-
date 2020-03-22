import React from 'react'
import './style.css'
import Card from '../UI/Card'

/**
* @author
* @function sidebar
**/

const sidebar = (props) => {
  return(
      <div className="sidebarContainer">
        <Card style={{marginBottom: '10px'}}>
          <div className="cardHeader">
            <span>About Us</span>
            <div>
              <img className="aboutusimg" src={require('../../blogImages/elipic.jpg') } alt=""></img>
            </div>
            <div className="cardBody">
              <p className="bio" >This is Eli Labourne Enterprise, we offer web development services
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </Card>
        <Card  style={{marginBottom: '10px'}}>
          <div className="cardHeader">
            <span>Social Network</span>
          </div>
        </Card>
        <Card  style={{marginBottom: '10px'}}>
          <div className="cardHeader">
            <span>Recent Posts</span>
          </div>

          <div className="recentPosts">
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 17, 2019</span>
            </div>
          </div>

          <div className="recentPosts">
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 17, 2019</span>
            </div>
          </div>

          <div className="recentPosts">
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 17, 2019</span>
            </div>
          </div>
        </Card>
      </div>
   )

 }

export default sidebar