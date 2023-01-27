import { ContainerResumeProducts, ContainerAddItem } from "./style";
import { useContext } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";

const ResumeProducts = () => {
  const { productsInfo, setProductsInfo } = useContext(ResumeProductsContext);

  const handleClick = (e, operation) => {
    if (e.amount + operation >= 0) {
      let newAmount = e.amount + operation;
      let val = parseFloat(e.value) + parseFloat(e.originalValue) * operation;
      setProductsInfo(
        productsInfo.map((elm) => {
          if (elm === e) {
            return {
              ...elm,
              amount: newAmount,
              value: val.toFixed(2),
            };
          }
          return elm;
        })
      );
    }
  };

  return (
    <>
      {!productsInfo.length ? (
        <h1>Você não possui produtos</h1>
      ) : (
        productsInfo.map((e, index) => (
          <ContainerResumeProducts key={index}>
            <img src={e.imgLink} alt={e.description} />
            <p>{e.description}</p>
            <ContainerAddItem>
              <button onClick={() => handleClick(e, -1)}>-</button>
              <input placeholder={e.amount} readOnly />
              <button onClick={() => handleClick(e, 1)}>+</button>
            </ContainerAddItem>
            <div>R$ {e.value}</div>
          </ContainerResumeProducts>
        ))
      )}
    </>
  );
};

export default ResumeProducts;
