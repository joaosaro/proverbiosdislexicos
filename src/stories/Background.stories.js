import React from "react";
import Background from "../components/background/Background";
import { ThemeProvider } from "../providers/Theme";

export const Default = () => <Background />;

export const WithThemeProvider = () => (
  <ThemeProvider>
    <Background />
  </ThemeProvider>
);

export default {
  title: "Background",
  component: Background
};
