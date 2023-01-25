import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import CartContainer from "./style";


const Carrinho = () => {
  return (
    <CartContainer>
      <ResumeProducts/>
      <ResumeCart/>
    </CartContainer>
  );
};

export default Carrinho;
