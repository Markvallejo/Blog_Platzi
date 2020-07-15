import React from "react";

import "../styles/profile.css";
import CardBlogs from "./card_blogs";

const ProyectProfile = () => {
  const blogpost = [
    {
      id: 1,
      title: "React Native",
      description:
        "Aplicaciones basadas en componentes nativos para las plataformas Android y IOS. React Native, una libreria basada en JavaScrip. "
    },
    {
      id: 2,

      title: "Flutter",
      description:
        "Desarrollo de App nativa con flutter y el nuevo lenguaje de programacion Dart para General Motors. Este Framework esta basado en React Native y es su actual competencia. "
    },
    {
      id: 3,

      title: "React y React Redux",
      description:
        "Website desarrollado aplicando tecnologia de react and react redux basada en componentes, los cuales se comunican entre si a traves de Reducers. "
    }
  ];

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam est ex deserunt soluta! Laboriosam, quos adipisci nemo ex expedita, ratione deserunt non iusto magni, suscipit similique repudiandae. Sed, placeat";
  return (
    <div className="proyect_profile grid_container">
      <p className="final_title">Proyectos</p>
      <div className="card_profile_container">
        {blogpost.map(post => (
          <CardBlogs
            key={post.id}
            title={post.title}
            description={post.description + text}
          />
        ))}
      </div>
    </div>
  );
};

export default ProyectProfile;
