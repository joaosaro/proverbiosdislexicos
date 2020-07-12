import React from "react";
import HideButton from "../../components/hide-button/hideButton";

export const Default = () => (
  <div style={{ backgroundColor: "#000", minHeight: 30 }}>
    <HideButton
      iconSrc="https://www.proverbiosdislexicos.com/images/right-arrow.svg"
      iconAlt="placeholder"
    >
      Hide Button
    </HideButton>
  </div>
);

export default {
  title: "Components/HideButton",
  component: HideButton
};
