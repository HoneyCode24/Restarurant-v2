import React from "react";
import './Experience_Section.css'
import card_img_1 from "../assets/card_img_1.jpg"
import card_img_2 from "../assets/card_img_2.png"
import card_img_3 from "../assets/card_img_3.png"
const Experience_Section = ()=>{
    return(
        <div className="section">
            <div className="section-headings">
                <div className="main-heading-container">
                    <p className="main-heading">More Than Dinner.</p>
                    <p className="main-heading">A Story You Create Together.</p>
                </div>
                <p className="section-text">We believe the best evenings aren't measured in dishes servered, but in the moments shared between them.</p>
            </div>

            <div className="card-container">
                <div className="card">
                    <img src={card_img_1} alt="" />
                    <div className="card-content">
                        <p className="card-heading">Intimate Connection</p>
                        <p className="card-text">Spaces designed for conversation, eye contact, and moments that matter.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card_img_2} alt="" />
                    <div className="card-content">
                        <p className="card-heading">Curated Atmosphere</p>
                        <p className="card-text">Every details- from lighting to music - carfted to enhance your moment together.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card_img_3} alt="" />
                    <div className="card-content">
                        <p className="card-heading">Meaningful Moments</p>
                        <p className="card-text">Not just a meal, but a memory you will carry with you forever.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience_Section;