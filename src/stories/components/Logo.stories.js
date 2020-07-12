import React from "react";
import Logo from "../../components/logo/Logo";

export const Default = () => (
  <div style={{ backgroundColor: "#000", minHeight: 40, padding: 1 }}>
    <Logo />
  </div>
);

export default {
  title: "Components/Logo",
  component: Logo
};
