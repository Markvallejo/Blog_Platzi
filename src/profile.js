import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

import MainProfile from "./components/main_profile";
import ProyectProfile from "./components/proyects_profile";
import Contact from "./components/section_contact";

const Profile = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <MainProfile />
        <ProyectProfile />
        <Contact />
        <Footer></Footer>
      </main>
    </>
  );
};

export default Profile;
