import React, { useContext, HTMLAttributes } from "react";
import "./proverbio-text.scss";
import { ProverbioContext } from "../../providers/Proverbio";

type AlignY = "top" | "bottom";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  alignY?: AlignY;
}

const ProverbioText: React.FC<Props> = ({
  children,
  alignY = "top",
  style,
  ...props
}) => {
  const { editable } = useContext(ProverbioContext);
  const alignSelf = alignY === "top" ? "start" : "end";

  return (
    <p
      className="proverbio-text"
      style={{ alignSelf, ...style }}
      contentEditable={editable}
      {...props}
    >
      {children}
    </p>
  );
};

export default ProverbioText;
