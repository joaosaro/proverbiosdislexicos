import React, { useState, useContext } from "react";
import ControlButton from "../../components/control-button/controlButton";
import HideButton from "../../components/hide-button/hideButton";
import Palette from "../../components/palette/Palette";
import ColorButton from "../../components/color-button/ColorButton";
import { ProverbioContext } from "../../providers/Proverbio";
import { ThemeContext } from "../../providers/Theme";
import themes from "../../data/themes";
import "./controls.scss";

const Controls: React.FC = () => {
  const colors = themes.default;
  const [paletteOpen, togglePalette] = useState<boolean>(false);
  const { color: activeColor, setColor } = useContext(ThemeContext);
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
      <Palette>
        {colors.map((color, index) => {
          return (
            <ColorButton
              key={index}
              color={color}
              active={color === activeColor}
              onClick={() => setColor(themes.default[index])}
            />
          );
        })}
      </Palette>
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
