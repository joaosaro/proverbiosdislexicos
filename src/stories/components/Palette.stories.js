import React from "react";
import Palette from "../../components/palette/Palette";

export const Default = () => (
  <div style={{ width: 80 }}>
    <Palette>children</Palette>
  </div>
);

export default {
  title: "Components/Palette",
  component: Palette
};
