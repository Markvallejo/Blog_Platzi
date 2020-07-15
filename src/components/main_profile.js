import React from "react";

import "../styles/profile.css";
import img from "../images/perfil.JPG";

const MainProfile = () => {
  const title = "Hola!";
  const description =
    " Algunos proyectos completados en el camino para alcanzar la meta como Desarrollador Frontend. Las nuevas tecnologias nos empujan a seguir aprendiendo, no podemos quedarnos atras en el mundo de la informatica donde todos los dias hay mas nuevos conocimientos por adquirir. Aca una descripcion de algunos Frameworks y librerias que son esenciales en el amplio mundo Frontend Desing.";
  return (
    <div className="main_blog grid_container">
      <div className="profile_left">
        <img className="image" src={img} alt="imagen" />
      </div>
      <div className="profile_right">
        <h2> {title} </h2>
        <p>{description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          placeat tempore dolorum, suscipit accusantium nihil asperiores est
          maiores ex itaque magni hic earum dicta cupiditate nemo dolorem.
          Mollitia, blanditiis voluptatum.
        </p>
      </div>
    </div>
  );
};

export default MainProfile;
