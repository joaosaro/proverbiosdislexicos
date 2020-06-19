import React, { ButtonHTMLAttributes, ImgHTMLAttributes } from "react";
import "./control-button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc?: ImgHTMLAttributes<HTMLImageElement>["src"];
  iconAlt: ImgHTMLAttributes<HTMLImageElement>["alt"];
}

const ControlButton: React.FC<Props> = ({
  children,
  iconSrc,
  iconAlt,
  ...props
}) => {
  return (
    <button className="controls__button" {...props}>
      <span className="controls__text">{children}</span>
      <img className="controls__icon" src={iconSrc} alt={iconAlt} />
    </button>
  );
};

export default ControlButton;
