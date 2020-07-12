import React from "react";
import ColorButton from "../../components/color-button/ColorButton";

export const Default = () => (
  <>
    <ColorButton color="steelblue" />
    <ColorButton color="red" />
    <ColorButton color="orange" />
    <ColorButton color="yellow" />
  </>
);

export const Active = () => (
  <>
    <ColorButton color="red" active />
  </>
);

export default {
  title: "Components/ColorButton",
  component: ColorButton
};
