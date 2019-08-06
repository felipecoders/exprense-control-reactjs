import React from "react";

import { Container } from "./styles";

import Navbar from "../Navbar";
import Header from "../Header";

/** estrutura a tela inicial */
export default function Main({ myComponent: Content, componentProps }) {
  console.log(componentProps);
  return (
    <Container>
      <Navbar current={componentProps.history.location.pathname} />
      <main>
        <Header />
        <Content {...componentProps} />
      </main>
    </Container>
  );
}
