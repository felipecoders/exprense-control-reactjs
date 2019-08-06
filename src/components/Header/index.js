import React from "react";

import UserMenu from "./UserMenu";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h2>Expanse Control</h2>
      <UserMenu />
    </Container>
  );
}
