import React, { Component } from "react";

import MainBlog from "./components/main_blog";
import SecundBlog from "./components/secund_blog";
import Footer from "./components/footer";
import Header from "./components/header";

class Blog extends Component {
  render() {
    return (
      <>
        <header>
          <Header></Header>
        </header>
        <main>
          <MainBlog />
          <SecundBlog />
          <Footer />
        </main>
      </>
    );
  }
}

export default Blog;
