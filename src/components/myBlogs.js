import React from "react";

const MyBlogs = props => {
  return (
    <div className="main">
      <div className="main_blog_top">
        <img className="image_main" src={props.imagen} alt="imagen" />
        <h3 className="noticias">Noticias</h3>
      </div>
      <div className="main_blog_bootom">
        <h2 className="title"> {props.title} </h2>
        <p>{props.description}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          neque ullam provident molestias commodi dolorem accusantium nesciunt
          ex ipsa tempore corrupti autem aut minima error facilis, assumenda
          voluptates, perspiciatis magni!
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default MyBlogs;
