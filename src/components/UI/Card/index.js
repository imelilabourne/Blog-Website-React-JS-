import React from 'react'
import './style.css'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card">
    <span className="icon"><TiSocialTwitterCircular size={28}/></span>
    <span className="icon"><TiSocialGithubCircular size={28}/></span>
    {props.children}
    <span className="icon"><TiSocialFacebookCircular size={28}/></span>
    <span className="icon"><TiSocialLinkedinCircular size={28}/></span>
    </div>
   )
 }

export default Card