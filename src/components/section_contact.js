import React from "react";

import contact from "../images/contact.png";
import comment from "../images/comment.png";

import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="section_contact">
      <div className="section_contactAndComment">
        <img className="img" src={contact} alt="" />
        <div className="section_info">
          <h5>Contacto</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="section_contactAndComment">
        <img className="img" src={comment} alt="" />
        <div className="section_info">
          <h5>Escribe</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
