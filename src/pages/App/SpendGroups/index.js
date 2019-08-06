import React from "react";

import List from "../../../components/List";

import { Container, Card } from "./styles";

export default function SpendGroups() {
  const data = [{ name: "teste" }];
  return (
    <Container>
      <List
        title="Grupos"
        plus={() => console.log("add")}
        remove={() => console.log("remove")}
      >
        {data.map(group => (
          <Card key={group.name} className="card">
            <div className="card-title">{group.name}</div>
          </Card>
        ))}
      </List>
    </Container>
  );
}
