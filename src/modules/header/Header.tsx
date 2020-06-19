import React from "react";
import "./header.scss";
import Logo from "../../components/logo/Logo";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};

export default Header;
