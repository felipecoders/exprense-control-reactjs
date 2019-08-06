import React, { useState } from "react";
import IconUser from "@material-ui/icons/PersonOutlined";

import { logout } from "../../../services/auth";

import { Container } from "./styles";

export default function UserMenu() {
  const [visible, setVisible] = useState(false);

  function MenuOptions() {
    return (
      <ul>
        <li onClick={() => logout()}>Exit</li>
      </ul>
    );
  }

  return (
    <Container>
      <button type="button" onClick={() => setVisible(!visible)}>
        <IconUser />
      </button>

      {visible && MenuOptions()}
    </Container>
  );
}
