import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <p>
          Design and Developed by : <i>Vikas Pandey</i>
        </p>
        <p>
          Email : <i>vikas1pandey020@gmail.com</i>
        </p>
      </section>
      <section className="menu">
        <ul>
          <li>Home</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
