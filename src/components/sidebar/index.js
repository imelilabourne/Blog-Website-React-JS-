import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  } 
, posts);

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

            {
              posts.map(post=>{
                return(
                  <NavLink to={`/post/${post.id}`}>
                    <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                );
              })
            }
          
          </div>
        </Card>
      </div>
   )

 }

export default Sidebar