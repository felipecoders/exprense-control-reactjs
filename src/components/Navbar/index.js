import React from "react";
import { Link } from "react-router-dom";
import IconHome from "@material-ui/icons/HomeOutlined";
import IconGroupWork from "@material-ui/icons/GroupWorkOutlined";
import IconAttachMoney from "@material-ui/icons/AttachMoneyOutlined";

import { Container } from "./styles";

export default function Navbar({ current }) {
  return (
    <Container>
      <Link
        to="/app"
        className={`nav-item ${current === "/app" ? "active" : ""}`}
      >
        <IconHome />
      </Link>
      <hr />
      <Link
        to="/spend-groups"
        className={`nav-item ${current === "/spend-groups" ? "active" : ""}`}
      >
        <IconGroupWork />
      </Link>
      <Link
        to="/spends"
        className={`nav-item ${current === "/spends" ? "active" : ""}`}
      >
        <IconAttachMoney />
      </Link>
    </Container>
  );
}
