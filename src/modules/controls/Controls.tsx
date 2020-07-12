import React, { useState, useContext } from "react";
import "./controls.scss";
import ControlButton from "../../components/control-button/controlButton";
import HideButton from "../../components/hide-button/hideButton";
import Palette from "../../components/palette/Palette";
import { ProverbioContext } from "../../providers/Proverbio";

const Controls: React.FC = () => {
  const [paletteOpen, togglePalette] = useState<boolean>(false);
  const { setProverbios, editable, setEditable } = useContext(ProverbioContext);

  const classes = ["controls", paletteOpen ? "controls--open" : null]
    .join(" ")
    .trim();

  const onClickNovoProverbio = () => {
    setProverbios();
    setEditable(false);
  };

  return (
    <aside className={classes}>
      <div className="controls_options">
        <ControlButton
          onClick={onClickNovoProverbio}
          iconSrc="/images/button_generator.svg"
          iconAlt="Gerador"
        >
          Novo provérbio
        </ControlButton>
        <ControlButton
          onClick={() => setEditable(!editable)}
          iconSrc="/images/button_text.svg"
          iconAlt="Gerador"
        >
          Editar texto
        </ControlButton>
        <ControlButton
          onClick={() => togglePalette(!paletteOpen)}
          iconSrc="/images/button_color.svg"
          iconAlt="Gerador"
        >
          Alterar côr
        </ControlButton>
      </div>
      <Palette />
      <HideButton
        iconSrc="/images/right-arrow.svg"
        iconAlt="Hide palette"
        onClick={() => {
          togglePalette(false);
        }}
      />
    </aside>
  );
};

export default Controls;
