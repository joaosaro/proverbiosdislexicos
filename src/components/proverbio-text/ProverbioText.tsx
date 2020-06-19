import React from "react";
import "./proverbioText.scss";

type AlignY = "top" | "bottom";

interface Props {
  alignY?: AlignY;
}

const ProverbioText: React.FC<Props> = ({ children, alignY = "top" }) => {
  const alignSelf = alignY === "top" ? "start" : "end";

  return (
    <p className="proverbio-text" style={{ alignSelf }}>
      {children}
    </p>
  );
};

export default ProverbioText;
