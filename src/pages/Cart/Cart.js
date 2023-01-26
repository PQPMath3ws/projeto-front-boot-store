import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import CartContainer from "./style";
import styled from "styled-components";
import Title from "../../components/CartTitle";
import FreightCalculator from "../../components/FreightCalculator/FreightCalculator";
import CartFooter from "../../components/CartFooter";

const Carrinho = () => {
  return (
    <>
      <Header/>
      <Title/>
      <CartContainer>
        <ResumeProducts />
        <ResumeProducts />
        <FreightCalculator/>
        <ResumeCart />
      </CartContainer>
      <CartFooter/>
    </>
  );
};

export default Carrinho;


// provisory style 

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0B508A;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`