import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

const theme = {
  main: "#f4511e"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Routes />
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
