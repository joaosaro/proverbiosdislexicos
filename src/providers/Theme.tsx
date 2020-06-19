import React, { createContext, useState } from "react";
import themes, { ThemeType } from "../data/themes";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  color: ThemeType | undefined;
  setColor: (value: ThemeType) => void;
}

const ThemeContext = createContext<ContextType>({
  color: "#393D3F",
  setColor: () => {}
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = useState<ThemeType>(themes.default[0]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
