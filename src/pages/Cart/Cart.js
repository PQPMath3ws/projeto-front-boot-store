import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import { CartContainer, CartContainer1, CartContainer2, Button } from "./style";
import styled from "styled-components";
import Title from "../../components/CartTitle";
import FreightCalculator from "../../components/FreightCalculator/FreightCalculator";
import CartFooter from "../../components/CartFooter";
import { useEffect, useState } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";

const Carrinho = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [cep, setCep] = useState(0);
  const [userTotal, setUserTotal] = useState(0)

  useEffect(() => {
    const products = [
      {
        description: "Ração Seca Nutrilus Pro+ Carne para Gatos Adultos",
        value: "129.12",
        originalValue: "129.12",
        imgLink:
          "https://www.petlove.com.br/images/products/250518/product/2661128_FRENTE.jpg?1635791683",
        amount: 1,
      },
      {
        description: "Ração Seca Nutrilus Pro+ Carne para Gatos Adultos",
        value: "129.12",
        originalValue: "129.12",
        imgLink:
          "https://www.petlove.com.br/images/products/250518/product/2661128_FRENTE.jpg?1635791683",
        amount: 1,
      },
      {
        description: "Ração Seca Nutrilus Pro+ Carne para Gatos Adultos",
        value: "129.12",
        originalValue: "129.12",
        imgLink:
          "https://www.petlove.com.br/images/products/250518/product/2661128_FRENTE.jpg?1635791683",
        amount: 1,
      }, {
        description: "Ração Seca Nutrilus Pro+ Carne para Gatos Adultos",
        value: "129.12",
        originalValue: "129.12",
        imgLink:
          "https://www.petlove.com.br/images/products/250518/product/2661128_FRENTE.jpg?1635791683",
        amount: 1,
      },

    ];
    setProductsInfo(products);
  }, []);




  return (
    <ResumeProductsContext.Provider
      value={{ productsInfo, setProductsInfo, total, setTotal, setCep, cep, userTotal, setUserTotal }}
    >
      <Container>
        <Header />
        <Title />
        <CartContainer>
          <CartContainer1>
            <ResumeProducts />
          </CartContainer1>
          <CartContainer2>
            <FreightCalculator />
            <ResumeCart />
            <Button>Finalizar Compra</Button>
          </CartContainer2>
        </CartContainer>
        <CartFooter />
      </Container>
    </ResumeProductsContext.Provider>
  );
};

export default Carrinho;

// provisory style

const Container = styled.main`
  width: 100%;
  height: auto;
  position: absolute;
`;

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0b508a;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
