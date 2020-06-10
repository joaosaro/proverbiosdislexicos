import React from "react";
import "./proverbio.scss";
import ProverbioText from "../../components/proverbioText/ProverbioText";

const Proverbio: React.FC = () => {
  return (
    <div className="proverbio">
      <ProverbioText alignY="bottom">Em casa de ferreiro</ProverbioText>
      <ProverbioText>Enche a galinha o papo</ProverbioText>
    </div>
  );
};

export default Proverbio;
