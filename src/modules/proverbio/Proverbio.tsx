import React, { useContext } from "react";
import "./proverbio.scss";
import { ProverbioContext } from "../../providers/Proverbio";
import ProverbioText from "../../components/proverbio-text/ProverbioText";

const Proverbio: React.FC = () => {
  const { proverbio1, proverbio2 } = useContext(ProverbioContext);

  return proverbio1 && proverbio2 ? (
    <div className="proverbio">
      <ProverbioText alignY="bottom">{proverbio1.part1}</ProverbioText>
      <ProverbioText>{proverbio2.part2}</ProverbioText>
    </div>
  ) : null;
};

export default Proverbio;
