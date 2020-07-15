import React from "react";
import "../styles/header.css";

import Menu from "./menu";
import SocialMedia from "./social_media";

import facebook from "../icons/my-icons/png/001-facebook.png";
import twitter from "../icons/my-icons/png/002-twitter.png";
import instagram from "../icons/my-icons/png/003-instagram.png";
import linkedin from "../icons/my-icons/png/004-linkedin.png";
import youtube from "../icons/my-icons/png/007-youtube.png";

const socialInfo = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: facebook,
    name: "facebook"
  },
  {
    id: 2,
    link: "https://www.twitter.com/",
    icon: twitter,
    name: "twitter"
  },
  {
    id: 3,
    link: "https://www.instagram.com/",
    icon: instagram,
    name: "instagram"
  },
  {
    id: 4,
    link: "https://www.linkedin.com/",
    icon: linkedin,
    name: "linkedin"
  },
  {
    id: 5,
    link: "https://www.youtube.com/",
    icon: youtube,
    name: "youtube"
  }
];

function Header() {
  return (
    <div className="header">
      <div className="social_media">
        {socialInfo.map(info => (
          <SocialMedia
            key={info.id}
            link={info.link}
            icon={info.icon}
            name={info.name}
          />
        ))}
      </div>
      <Menu />
    </div>
  );
}

export default Header;
