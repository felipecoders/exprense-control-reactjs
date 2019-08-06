import React from "react";
import IconAdd from "@material-ui/icons/Add";
import IconClear from "@material-ui/icons/Clear";

import { Container } from "./styles";

export default function List({ title, children }) {
  return (
    <Container>
      <h1>
        <span>{title}</span>
        <div>
          <button type="button">
            <IconAdd />
          </button>
          <button type="button">
            <IconClear />
          </button>
        </div>
      </h1>
      <div className="cards-content">{children}</div>
    </Container>
  );
}
