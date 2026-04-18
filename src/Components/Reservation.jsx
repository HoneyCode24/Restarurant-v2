import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <section className="reservation">
      
      {/* LEFT SIDE */}
      <div className="reservation-left">
        <p className="tag">RESERVE YOUR MOMENT</p>

        <h1 className="title">
          Begin your <br /> story tonight
        </h1>

        <p className="desc">
          Every evening is limited. Every table is intimate. Reserve your space
          and let us create the perfect setting for your moment.
        </p>

        <ul className="info">
          <li>
            <strong>Open Tuesday - Sunday</strong>
            <span>5:00 PM - 11:00 PM</span>
          </li>
          <li>
            <strong>Reservations recommended</strong>
            <span>Walk-ins welcome based on availability</span>
          </li>
          <li>
            <strong>Private events</strong>
            <span>Contact us for special occasions</span>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="reservation-right">
        <form className="form">
          <input type="text" placeholder="Enter your name" />

          <input type="email" placeholder="your@email.com" />

          <input type="tel" placeholder="+1 (555) 000-0000" />

          <div className="row">
            <input type="date" />
            <select>
              <option>Select</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>
          </div>

          <select>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>

          <textarea placeholder="Anniversary, birthday, proposal..."></textarea>

          <button type="submit">CONFIRM RESERVATION</button>
        </form>
      </div>

    </section>
  );
};

export default Reservation;