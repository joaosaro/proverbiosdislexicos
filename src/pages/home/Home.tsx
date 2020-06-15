import React from "react";
import "./home.scss";
import Header from "../../modules/header/Header";
import Proverbio from "../../modules/proverbio/Proverbio";
import Footer from "../../modules/footer/Footer";
import Social from "../../modules/social/Social";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Proverbio />
      </main>
      <aside className="proverbios-controls">controls</aside>
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
