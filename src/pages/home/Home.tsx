import React from "react";
import "./home.scss";
import Header from "../../modules/header/Header";
import Proverbio from "../../modules/proverbio/Proverbio";
import Footer from "../../modules/footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Proverbio />
      </main>
      <div className="actions">
        <div className="proverbios-controls">controls</div>
        <div className="social">social</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;