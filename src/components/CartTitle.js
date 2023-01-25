import styled from "styled-components";

const Title = () => {
  return <CartTitle> Produtos Carrinho </CartTitle>;
};

export default Title;

const CartTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 10px auto;
  padding-left: 20px;
  color: #ff862d;
`;
