import React, { createContext, useState } from "react";
import themes, { ThemeType } from "../data/themes";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  color: ThemeType | undefined;
  changeColor: (value: ThemeType) => void;
}

const ThemeContext = createContext<ContextType>({
  color: "#393D3F",
  changeColor: () => {}
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = useState<ThemeType>(themes.default[0]);

  const changeColor = (value: ThemeType) => {
    setColor(value);
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
