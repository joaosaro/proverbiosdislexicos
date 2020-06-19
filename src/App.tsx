import React from "react";
import { ThemeProvider } from "./providers/Theme";
import { ProverbioProvider } from "./providers/Proverbio";
import Background from "./components/background/Background";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProverbioProvider>
        <Background />
        <Home />
      </ProverbioProvider>
    </ThemeProvider>
  );
};

export default App;
