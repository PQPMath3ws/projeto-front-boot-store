import styled from "styled-components";

const CartFooter = () => {
  return (
    <Container>
      <h1>Total <span>R$ 26,90</span></h1>
      <Button>Finalizar Compra</Button>
    </Container>
  );
};

export default CartFooter;

const Container = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 700;

  background-color: #0b508a;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  span{
    font-weight: 400;
    margin-left: 10px;
  } 
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  text-align: center;
  border-radius: 15px;
  border: none;
  font-size: 15px;

  background-color: #FF862D;
  color: white;
  font-weight: 700;
`;
