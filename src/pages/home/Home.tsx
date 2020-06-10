import React from "react";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="header">header</header>
      <div className="proverbio">proverbios</div>
      <div className="actions">
        <div className="proverbios-controls">controls</div>
        <div className="social">social</div>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default Home;
