import React, { ButtonHTMLAttributes, CSSProperties } from "react";
import "./color-button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  color: CSSProperties["backgroundColor"];
}

const ColorButton: React.FC<Props> = ({ active, color, ...props }) => {
  const classes = ["color-button", active ? "color-button__active" : null]
    .join(" ")
    .trim();

  return (
    <button className={classes} style={{ backgroundColor: color }} {...props} />
  );
};

export default ColorButton;
