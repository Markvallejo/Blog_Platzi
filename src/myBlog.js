import React, { Component } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import MyBlogs from "./components/myBlogs";
import Contact from "./components/section_contact";
import "./styles/mybloc.css";

import imagen from "./images/main.png";

class MyBloc extends Component {
  render() {
    const {
      match: {
        params: { title, description }
      }
    } = this.props;

    return (
      <>
        <header>
          <Header></Header>
        </header>
        <main>
          <MyBlogs title={title} description={description} imagen={imagen} />
          <Contact />
          <Footer></Footer>
        </main>
      </>
    );
  }
}

export default MyBloc;
