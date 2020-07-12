import React from "react";
import ProverbioText from "../../components/proverbio-text/ProverbioText";

export const Default = () => (
  <ProverbioText>Parte de um provérbio</ProverbioText>
);

export const AlignYTop = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      gridGap: "20%",
      minHeight: "100vh",
      maxHeight: "100%",
      paddingLeft: "15vw",
      paddingRight: "10vw",
      overflow: "hidden"
    }}
  >
    <ProverbioText style={{ border: "1px solid" }}>
      Provérbio alinhado no fim
    </ProverbioText>
  </div>
);

export const AlignYBottom = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      gridGap: "20%",
      minHeight: "100vh",
      maxHeight: "100%",
      paddingLeft: "15vw",
      paddingRight: "10vw",
      overflow: "hidden"
    }}
  >
    <ProverbioText alignY="bottom" style={{ border: "1px solid" }}>
      Provérbio alinhado no fim
    </ProverbioText>
  </div>
);

export default {
  title: "Components/ProverbioText",
  component: ProverbioText
};
