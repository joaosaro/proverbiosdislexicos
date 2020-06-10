import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      © {year} Powered by <strong>HYD</strong>
    </footer>
  );
};

export default Footer;
