import React from "react";
import './Hero.css'
import Hero_img from "../assets/Hero.png"
import Logo from "../assets/logo.png"
import Home_icon from "../assets/Home_icon.png"
import Menu_icon from "../assets/Menu_icon.png"


const Hero=()=>{
    return(
        <div className="Hero">
            <img className="Hero_bg" src={Hero_img} alt="Hero img" />
            <nav className="Navbar">
                <img className="logo" src={Logo} alt="" />
                <p className="company_name">Figaro</p>
                <div className="icon">
                    <img src={Home_icon} alt="" />
                    <img src={Menu_icon} alt="" />
                </div>
            </nav>
            
            <div className="Hero_text">
                <p className="section-title">Experience</p>
                <p className="hero_title">AL DENTE GOURMET RESTAURANT</p>
                <div>
                    <p className="hero-text">Discover A Gastronomic Experience That</p>
                    <p className="hero-text"> Transports You To The Heart Of Italy.</p>
                </div>
                <button className="Hero-button">Learn More</button>
            </div> 
            
        </div>
    )
}
export default Hero