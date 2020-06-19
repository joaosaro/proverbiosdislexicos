import React, { useContext } from "react";
import "./proverbio-text.scss";
import { ProverbioContext } from "../../providers/Proverbio";

type AlignY = "top" | "bottom";

interface Props {
  alignY?: AlignY;
}

const ProverbioText: React.FC<Props> = ({ children, alignY = "top" }) => {
  const { editable } = useContext(ProverbioContext);
  const alignSelf = alignY === "top" ? "start" : "end";

  return (
    <p
      className="proverbio-text"
      style={{ alignSelf }}
      contentEditable={editable}
    >
      {children}
    </p>
  );
};

export default ProverbioText;
