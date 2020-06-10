import React, { createContext, useState } from "react";
import proverbios, { ProverbioType } from "../data/proverbios";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  proverbio1: ProverbioType;
  proverbio2: ProverbioType;
  setProverbio1: () => void;
  setProverbio2: () => void;
}

const ProverbioContext = createContext<ContextType>({
  proverbio1: proverbios[0],
  proverbio2: proverbios[1],
  setProverbio1: () => {},
  setProverbio2: () => {}
});

const ProverbioProvider: React.FC<Props> = ({ children }) => {
  const [proverbio1, setP1] = useState<ProverbioType>(proverbios[0]);
  const [proverbio2, setP2] = useState<ProverbioType>(proverbios[1]);

  const randomProv = () => {
    return Math.random() * proverbios.length;
  };

  const setProverbio1 = () => {
    const p1 = randomProv();
    setP1(proverbios[p1]);
  };

  const setProverbio2 = () => {
    const p2 = randomProv();
    setP2(proverbios[p2]);
  };

  return (
    <ProverbioContext.Provider
      value={{ proverbio1, proverbio2, setProverbio1, setProverbio2 }}
    >
      {children}
    </ProverbioContext.Provider>
  );
};

export { ProverbioProvider, ProverbioContext };
