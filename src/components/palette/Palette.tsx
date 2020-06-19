import React, { useContext } from "react";
import "./palette.scss";
import themes from "../../data/themes";
import ColorButton from "../colorButton/ColorButton";
import { ThemeContext } from "../../providers/Theme";

const Palette: React.FC = () => {
  const colors = themes.default;
  const { color: activeColor, setColor } = useContext(ThemeContext);

  return (
    <div className="palette">
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
    </div>
  );
};

export default Palette;
