import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, Form } from "../SignUp/styles";

export default function SignIn({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha um e-amil e senha validos!");
      return;
    }

    try {
      const params = { email, password };
      const { data } = await api.post("/sessions", params);
      login(data.token);
      history.push("/app");
    } catch (e) {
      console.error(e);
      setError("Um erro ocorreu ao tentar logar-se");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <h2>Expense Control</h2>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          maxLength="254"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Logar</button>
        <hr />
        <Link to="/signup">Cadastrar-se</Link>
      </Form>
    </Container>
  );
}
