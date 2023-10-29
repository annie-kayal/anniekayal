import React from "react";
import ThemeType, { createGlobalStyle, ThemeProvider } from "styled-components";
import { ThemeUIProvider } from "theme-ui";

import { theme } from "./theme/theme";
import "./App.css";

import { Home } from "./pages/Home";

const GlobalStyles = createGlobalStyle<{ theme: typeof ThemeType }>`
html, body {
  margin: 0;
  box-sizing: border-box;

  #root {
    position:absolute;
    width:100%;
    overflow: scroll;
    top:0;
    bottom:0;
    padding: 0;
  }
}

@media screen and (min-width: 1024px) {
  #root {
    overflow: hidden;
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <ThemeUIProvider theme={theme}>
          <Home />
        </ThemeUIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
