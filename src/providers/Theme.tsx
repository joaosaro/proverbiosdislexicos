import React, { createContext, useState } from "react";
import themes from "../data/themes";

// type Theme = {
//   [key in keyof typeof themes]: string;
// }; // DOUBT: Use Theme as type

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<object>({
  color: "",
  action: () => {},
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [color, setColor] = useState<string>(themes.default.blue);

  const changeColor = (value: string) => {
    setColor(value);
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
