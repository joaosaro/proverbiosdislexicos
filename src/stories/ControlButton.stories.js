import React from "react";
import ControlButton from "../components/control-button/controlButton";

export const Default = () => (
  <div style={{ backgroundColor: "#555", minHeight: 100 }}>
    <ControlButton
      iconSrc="https://www.proverbiosdislexicos.com/images/button_generator.svg"
      iconAlt="placeholder"
    >
      Some Control
    </ControlButton>
  </div>
);

export default {
  title: "ControlButton",
  component: ControlButton
};
