import React, { useState } from "react";
import "./controls.scss";
import ControlButton from "../../components/controlButton/controlButton";

const Controls: React.FC = () => {
  const [paletteOpen, togglePalette] = useState<boolean>(false);

  const classes = ["controls", paletteOpen ? "controls--open" : null]
    .join(" ")
    .trim();

  return (
    <aside className={classes}>
      <div className="controls_options">
        <ControlButton
          onClick={() => console.log("new proverbio")}
          iconSrc="/images/button_generator.svg"
          iconAlt="Gerador"
        >
          Novo provérbio
        </ControlButton>
        <ControlButton
          onClick={() => console.log("editar text")}
          iconSrc="/images/button_text.svg"
          iconAlt="Gerador"
        >
          Editar texto
        </ControlButton>
        <ControlButton
          onClick={() => console.log("editar text")}
          iconSrc="/images/button_color.svg"
          iconAlt="Gerador"
        >
          Alterar côr
        </ControlButton>
      </div>
      <div className="palette-placeholder">palette</div>
      <button
        className="retacement-placeholder"
        onClick={() => {
          togglePalette(false);
        }}
      >
        Arrow
      </button>
    </aside>
  );
};

export default Controls;
