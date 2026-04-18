import React from "react";
import './Ambience_Section.css'
import Ambience_img from '../assets/ambience_img.png'

const Ambience_Section=()=>{
    return(
        <div className="ambience-section">
            <div className="section-content">
                <p className="text-1">The Ambience</p>
                <p className="title">Designed For Intimacy</p>
                <p className="text-2">Soft candlelight. Warm acoustic melodies. The gentle murmur of conversation. Every element orchestrated to create a cocoon of connection.</p>
                <p className="text-3">Our spaces are thoughtfully designed with intimate seating arrangements, dimmed Edison bulbs, and architectural details that invite you to slow down and savour the present. </p>
            </div>
            <div className="section-img">
                <div className="img-wrapper">
                    <img src={Ambience_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Ambience_Section;