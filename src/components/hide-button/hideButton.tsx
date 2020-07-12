import React, { ButtonHTMLAttributes, ImgHTMLAttributes } from "react";
import "./hide-button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: ImgHTMLAttributes<HTMLImageElement>["src"];
  iconAlt: ImgHTMLAttributes<HTMLImageElement>["alt"];
}

const HideButton: React.FC<Props> = ({ iconSrc, iconAlt, ...props }) => {
  return (
    <button className="hide-button" {...props}>
      <img className="hide-button__icon" src={iconSrc} alt={iconAlt} />
    </button>
  );
};

export default HideButton;
