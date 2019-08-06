import React from "react";

import { Container } from "./styles";

export default function NotFound({ history }) {
  return (
    <Container>
      <main>
        <h1>404</h1>
        <p>
          Página não encontrada.
          <span href="#" onClick={() => history.goBack()}>
            Deseja retornar?
          </span>
        </p>
      </main>
    </Container>
  );
}
