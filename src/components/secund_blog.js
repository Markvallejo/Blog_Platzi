import React from "react";

import "../styles/blog.css";
import CardBlogs from "./card_blogs";

import imgReactNative from "../images/reactNative.jpg";
import imgReactHooks from "../images/react-hooks.png";
import imgReactRedux from "../images/react-redux.jpeg";
import imgFlutter from "../images/flutter.png";
import imgBootstrap from "../images/bootstrap.png";
import imgGithub from "../images/github.png";

const SecundBlog = () => {
  const blogpost = [
    {
      id: 1,
      imagen: imgReactNative,
      title: "React Native",
      description:
        "Aplicaciones basadas en componentes nativos para las plataformas Android y IOS. React Native, una libreria basada en JavaScrip"
    },
    {
      id: 2,
      imagen: imgFlutter,
      title: "Flutter",
      description:
        "Desarrollo de App nativa con flutter y el nuevo lenguaje de programacion Dart para General Motors. Este Framework esta basado en React Native y es su actual competencia"
    },
    {
      id: 3,
      imagen: imgReactRedux,
      title: "React y React Redux",
      description:
        "Website desarrollado aplicando tecnologia de react and react redux basada en componentes, los cuales se comunican entre si a traves de Reducers"
    },
    {
      id: 4,
      imagen: imgReactHooks,
      title: "React Hooks",
      description:
        "El nuevo metodo de react para que componentes funcionales puedan manejar los estados de manera similar como en los componentes clases"
    },
    {
      id: 5,
      imagen: imgBootstrap,
      title: "Boostrap",
      description:
        " Bootstrap es un framework CSS y Javascript diseñado para la creación de interfaces limpias y con un diseño responsive"
    },
    {
      id: 6,
      imagen: imgGithub,
      title: "Github",
      description:
        " GitHub es un sistema de gestión de proyectos y control de versiones de código, así como una plataforma de red social diseñada para desarrolladores"
    }
  ];

  return (
    <div className="secund_blog grid_container">
      <p className="final_title">Ultimos Blogposts</p>
      <div className="card_blog_container">
        {blogpost.map(post => (
          <CardBlogs
            key={post.id}
            imagen={post.imagen}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SecundBlog;
