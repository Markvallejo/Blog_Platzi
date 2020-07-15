import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Profile from "./profile";
import Blogs from "./blog";
import MyBlog from "./myBlog";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/myblog/:title/:description" component={MyBlog} />
    </div>
  </BrowserRouter>
);

export default App;
