import React, { ReactNode } from "react";
import "./palette.scss";

interface Props {
  children: ReactNode;
}

const Palette: React.FC<Props> = ({ children }) => {
  return <div className="palette">{children}</div>;
};

export default Palette;
