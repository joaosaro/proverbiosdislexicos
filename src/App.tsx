import React from "react";
import { ThemeProvider } from "./providers/Theme";
import Background from "./components/background/Background";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Background />
      <Home />
    </ThemeProvider>
  );
};

export default App;
