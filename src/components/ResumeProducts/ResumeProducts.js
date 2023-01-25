import { ContainerResumeProducts } from "./style";
import AddItem from "../AddItem";

const ResumeProducts = () => {
  return (
    <ContainerResumeProducts>
      <img
        src="https://www.petlove.com.br/images/products/250518/mobile_shelf/2661128_FRENTE.jpg?1635791683"
        alt="a product of my site"
      />
      <p>Ração Seca Nutrilus Pro+ Carne para Gatos Adultos - 10,1 Kg</p>
      <AddItem />
      <div>R$ 26,90</div>
    </ContainerResumeProducts>
  );
};

export default ResumeProducts;
