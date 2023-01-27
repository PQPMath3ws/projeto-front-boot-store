import { useContext, useEffect } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";
import { ContainerResumeCart, Box1, Box2, Box3, Box4 } from "./style";

const ResumeCart = () => {
  const { productsInfo, total, setTotal } = useContext(ResumeProductsContext);

  useEffect(() => {
    const sumValues = (arr) =>
      arr.reduce((acc, obj) => acc + parseFloat(obj.value), 0);
    setTotal(sumValues(productsInfo));
  }, [productsInfo, setTotal]);

  return (
    <ContainerResumeCart>
      <h1>Resumo do Pedido</h1> 
      <Box1>
        <h2>Produtos - {productsInfo.length} item(s)</h2>
        <p>R$ {total.toFixed(2)}</p>
      </Box1>
      <Box2>
        <h2>Frete</h2>
        <p>R$ 0,00</p>
      </Box2>
      <Box3>
        <h2>Desconto</h2>
        <p>R$ 0,00</p>
      </Box3>
      <Box4>
        <h2>Total</h2>
        <p>R$ {total.toFixed(2)}</p>
      </Box4>
    </ContainerResumeCart>
  );
};

export default ResumeCart;
