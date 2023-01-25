import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import CartContainer from "./style";
import styled from "styled-components";
import Title from "../../components/CartTitle";

const Carrinho = () => {
  return (
    <>
      <Header>Header Provisório</Header>
      <Title/>
      <CartContainer>
        <ResumeProducts />
        <ResumeCart />
      </CartContainer>
    </>
  );
};

export default Carrinho;


// provisory style 

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0B508A;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`