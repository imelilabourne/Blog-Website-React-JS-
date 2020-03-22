import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
      <div className="blogpost" >
    <Card >
      <div className="blogHeader">
        <span className="blogCategory">Featured</span>
        <h1 className="postTitle">Beautiful is always beautiful</h1>
        <span className="postedBy">Posted on July 17, 2019</span>
        <div className="postImageContainer">
          <img src={require('../../blogImages/switz.jpg')} alt="Post Image"></img>
        </div>
      </div>
    </Card>
    </div>
   )

 }

export default BlogPost