import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class CardBlogs extends Component {
  render() {
    const route = this.props.location.pathname;
    const { title, description, imagen } = this.props;

    return (
      <div className="card_blog">
        <img className="image_new_blogpost" src={imagen} alt="" />
        <h4>{title}</h4>
        <p>{description}</p>
        {route === "/perfil" ? (
          ""
        ) : (
          <Link to={`/myblog/${title}/${description}`}>
            <button className="button_leer_mas">Leer mas</button>
          </Link>
        )}
      </div>
    );
  }
}

export default withRouter(CardBlogs);
