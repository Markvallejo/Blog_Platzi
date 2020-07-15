import React from "react";
import { Link } from "react-router-dom";

import "../styles/blog.css";
import img from "../images/perfil.JPG";

const MainBlog = () => {
  const title = "Frontend Desing";
  const description =
    " Algunos proyectos completados en el camino para alcanzar la meta como Desarrollador Frontend. Las nuevas tecnologias nos empujan a seguir aprendiendo, no podemos quedarnos atras en el mundo de la informatica donde todos los dias hay mas nuevos conocimientos por adquirir. Aca una descripcion de algunos Frameworks y librerias que son esenciales en el amplio mundo Frontend Desing.";
  return (
    <div className="main_blog grid_container">
      <div className="main_blog_left">
        <h3 class="title_blog">Proyectos</h3>
        <img className="image_noticia" src={img} alt="imagen" />
      </div>
      <div className="main_blog_right">
        <h2> {title} </h2>
        <p>{description}</p>
        <Link to={`/myblog/${title}/${description}`}>
          <button className="button_leer_mas">Leer mas</button>
        </Link>
      </div>
    </div>
  );
};

export default MainBlog;
