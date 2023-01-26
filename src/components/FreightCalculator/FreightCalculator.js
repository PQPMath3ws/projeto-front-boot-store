import React, { useState } from "react";
import { Container, Title, Input, Button } from "./style";

const FreightCalculator = () => {
  const [cep, setCep] = useState("");

  const handleSubmit = () => {
    // cálculo do frete
  };

  return (
    <Container>
      <Title>Calcule seu frete</Title>
      <div>
        <Input
          type="text"
          placeholder="Insira seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <Button onClick={handleSubmit}>Calcular</Button>
      </div>
    </Container>
  );
};

export default FreightCalculator;
