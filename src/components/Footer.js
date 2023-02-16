import React from "react";
import './Footer.css';
import {FaYoutube, FaTwitter, FaInstagram,FaFacebook,FaWhatsapp} from 'react-icons/fa'
function Footer(){
    return(
        <>
        <div className="foot">
<h1>Get The Best DEAL for YOURSELF</h1>
<a href=""><FaYoutube className="youtube"/></a>
<FaTwitter className="twitter"/>
<FaInstagram className="insta"/>
<FaFacebook className="facebook"/>
<FaWhatsapp className="what"/>
            </div>
        </>
    )
}

export default Footer;