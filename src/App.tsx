import React from "react";
import { ThemeProvider } from "./providers/Theme";
import Background from "./components/background.tsx/Background";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Background />
    </ThemeProvider>
  );
};

export default App;
