import React from "react";
import "../styles/header.css";

const SocialMedia = props => {
  return (
    <div className="icon">
      <a href={props.link} target="blank">
        <img src={props.icon} alt={props.name} />
      </a>
    </div>
  );
};

export default SocialMedia;
