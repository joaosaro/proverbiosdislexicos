import React from "react";
import ControlButton from "../../components/control-button/controlButton";

export const Default = () => (
  <div style={{ backgroundColor: "#000", minHeight: 40 }}>
    <ControlButton
      iconSrc="https://www.proverbiosdislexicos.com/images/button_generator.svg"
      iconAlt="placeholder"
    >
      Some Control
    </ControlButton>
  </div>
);

export default {
  title: "Components/ControlButton",
  component: ControlButton
};
