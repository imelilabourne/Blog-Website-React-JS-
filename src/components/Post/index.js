import React from 'react'
import './style.css'
import BlogPost from '../Blog Post'
import Sidebar from '../sidebar'

/**
* @author
* @function Post
**/

const Post = (props) => {

    console.log(props);
  return(
    <section className="container">
        <BlogPost {...props}/>
        <Sidebar/>
    </section>
   )

 }

export default Post