import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import CartContainer from "./style";
import styled from "styled-components";
import Title from "../../components/CartTitle";
import FreightCalculator from "../../components/FreightCalculator/FreightCalculator";
import CartFooter from "../../components/CartFooter";
import { useEffect, useState } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";

const Carrinho = () => {
  const [productsInfo, setProductsInfo] = useState({
    description: "",
    value: "",
    imgLink: "",
    amout: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const products = [
      {
        description: "Ração Seca Nutrilus Pro+ Carne para Gatos Adultos",
        value: "129.12",
        originalValue: '129.12',
        imgLink:
          "https://www.petlove.com.br/images/products/250518/product/2661128_FRENTE.jpg?1635791683",
        amount: 1,
      },
      {
        description: "Granulado de Madeira Meau para Gatos",
        value: "68.31",
        originalValue: '68.31',
        imgLink:
          "https://www.petlove.com.br/images/products/250924/product/_2679309_Granulado-Madeira-20.jpg?1636403458",
        amount: 1,
      },
      {
        description: "Ração GranPlus Choice Frango e Carne para Gatos Adultos",
        value: "128.61",
        originalValue: '128.61',
        imgLink:
          "https://www.petlove.com.br/images/products/242837/product/2493027_Ra%C3%A7%C3%A3o_Affinity_PetCare_GranPlus_Choice_Frango_e_Carne_para_Gatos_Adultos_1.jpg?1628185779",
        amount: 1,
      },
    ];
    setProductsInfo(products);
  }, []);

  return (
    <ResumeProductsContext.Provider
      value={{ productsInfo, setProductsInfo, total, setTotal }}
    >
      <Container>
        <Header />
        <Title />
        <CartContainer>
          <ResumeProducts />
          <FreightCalculator />
          <ResumeCart />
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
`;

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0b508a;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
