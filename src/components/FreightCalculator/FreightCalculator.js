import React, { useContext, useState } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";
import { Container, Title, Input, Button } from "./style";
import styled from "styled-components";

const FreightCalculator = () => {
  const { setCep } = useContext(ResumeProductsContext)
  const [cepValue, setCepValue] = useState("")

  //Função provisória para ser conectada a uma API do correios
  const handleSubmit = (e) => {
    e.preventDefault()
    if(cepValue.length < 8) {
      alert('Favor verificar o seu cep')
    } else {
      setCep(23.90)
    }
  };

  return (
    <Container>
      <Title>Calcule seu frete</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Insira seu CEP"
          required
          value={cepValue}
          onChange={(e) => setCepValue(e.target.value)}
        />
        <Button type="submit">Calcular</Button>
      </Form>

    </Container>
  );
};

export default FreightCalculator;


const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`