import React from "react";
import './Testimonial_Section.css'
import testimonial_img from '../assets/testimonial-image.png'
import review_img from '../assets/review_image.png'

const Testimonial_Section =()=>{
    return(
        <div className="testimonial-section">
            <div className="space-large-top"></div>
            <div className="Testimonial-content-container">
                <p className="testimonial-text-1">TESTIMONIALS</p>
                <p className="testimonial-text-2">Client Experiences</p>
                <p className="testimonial-text-3">"Dining at Figaro Italian Restaurant was like being transported to Italy. The flavors were authentic, and the ingredients were fresh and high-quality. The lasagna was rich and satisfying, and the wine pairings were spot on. The atmosphere was lively and welcoming, perfect for a fun night out with friends."</p>
                <div className="review">
                    <img src={review_img} alt="" className="review-img"/>
                    <div className="review-content">
                        <div className="review-stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <p className="name">Isabella f.</p>
                    </div>
                </div>
            </div>
            <div className="space-large-bottom"></div>
        </div>
    )
}
export default Testimonial_Section;