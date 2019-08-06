import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Container, Form } from "./styles";

function SignUp({ history }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    if (!name || !lastName || !email || !password || !phone) {
      setError("Preencha todos os dados para se cadastrar!");
      return;
    }

    try {
      const params = { name, last_name: lastName, email, password, phone };
      await api.post("/users", params);
      history.push("/");
    } catch (e) {
      console.error(e);
      setError("Um erro ocorreu ao registrar a sua conta");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <h2>Expense Control</h2>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Name"
          maxLength="20"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          maxLength="60"
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          maxLength="254"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          maxLength="30"
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          maxLength="11"
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <hr />
        <Link to="/">Fazer login</Link>
      </Form>
    </Container>
  );
}

export default withRouter(SignUp);
