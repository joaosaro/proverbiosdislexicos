import React, { createContext, useState, useCallback, useEffect } from "react";
import proverbios, { ProverbioType } from "../data/proverbios";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  proverbio1?: ProverbioType;
  proverbio2?: ProverbioType;
  setProverbios: () => void;
  editable: boolean;
  setEditable: (editable: boolean) => void;
}

const ProverbioContext = createContext<ContextType>({
  proverbio1: proverbios[0],
  proverbio2: proverbios[1],
  setProverbios: () => {},
  editable: false,
  setEditable: () => {}
});

const randomProv = () => {
  return Math.floor(Math.random() * proverbios.length);
};

const ProverbioProvider: React.FC<Props> = ({ children }) => {
  const [proverbio1, setP1] = useState<ProverbioType | undefined>(undefined);
  const [proverbio2, setP2] = useState<ProverbioType | undefined>(undefined);
  const [editable, setEditable] = useState<boolean>(false);

  const setProverbios = useCallback(() => {
    const p1 = randomProv();
    let p2 = randomProv();

    while (p1 === p2) {
      p2 = randomProv();
    }

    setP1(proverbios[p1]);
    setP2(proverbios[p2]);
  }, [setP1, setP2]);

  useEffect(() => {
    setProverbios();
  }, [setProverbios]);

  return (
    <ProverbioContext.Provider
      value={{
        proverbio1,
        proverbio2,
        setProverbios,
        editable,
        setEditable
      }}
    >
      {children}
    </ProverbioContext.Provider>
  );
};

export { ProverbioProvider, ProverbioContext };
