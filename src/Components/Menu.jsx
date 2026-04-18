import React from "react";
import './Menu.css'
import dish1 from '../assets/dish1.png';
import dish2 from '../assets/dish2.png';
import dish3 from '../assets/dish3.png';
import dish4 from '../assets/dish4.png';

const Menu = ()=>{
    return(
        <div className="Menu-section">
            <p className="Menu-title">OUR MENU</p>
        
            <div className="dish-section">
                <div className="dish1">
                    <img src={dish1} alt="" />
                </div>
                <div className="dish2">
                    <img src={dish2} alt="" />
                </div>
                <div className="dish3">
                    <img src={dish3} alt="" />
                </div>
                <div className="dish4">
                    <img src={dish4} alt="" />
                </div>
            </div>

            <button className="Menu-button">Full Menu </button>
        </div>
    )
}

export default Menu;