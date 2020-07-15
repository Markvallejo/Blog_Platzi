import React from "react";
import { Link } from "react-router-dom";
import "../styles/section_body.css";

const SectionBody = () => {
  return (
    <div className="section_body">
      <div className="container_body">
        <h1>Conoce las novedades y noticas del Mundo Tech</h1>
        <Link to="/blogs">
          <button>
            <p className="text_button">Entrar Ya</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionBody;
