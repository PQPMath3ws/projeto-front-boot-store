import axios from "axios";
import { ContainerResumeProducts, ContainerAddItem } from "./style";
import { useContext } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";
import { IoTrashBinOutline } from 'react-icons/io5'
import styled from "styled-components";

const ResumeProducts = () => {
  const { productsInfo, setProductsInfo, userId } = useContext(ResumeProductsContext);

  const handleClick = (e, operation) => {
    if (e.amount + operation >= 0) {
      let newAmount = e.amount + operation;
      let val = parseFloat(e.value ? e.value : e.product.descountPrice ? e.product.descountPrice : e.product.price) + parseFloat(e.product.descountPrice ? e.product.descountPrice : e.product.price)   * operation;
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

  const removeItem = (e) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/removeCart/${e._id}`, {
      headers: {
        "X-Request-ID": userId
      }
    }).then(_ => {
      window.location.reload(false);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <>
      {!productsInfo.length ? (
        <h1>Você não possui produtos</h1>
      ) : (
        productsInfo.map((e, index) => (
          <ContainerResumeProducts key={index}>
            <img src={e.product.image} alt={e.product.name} />
            <p>{e.product.name}</p>
            <ContainerAddItem>
              <button onClick={() => handleClick(e, -1)}>-</button>
              <input placeholder={e.amount} readOnly />
              <button onClick={() => handleClick(e, 1)}>+</button>
            </ContainerAddItem>
            <ContainerValueAndTrash>
              R$ {e.value ? e.value : e.product.descountPrice ? e.product.descountPrice : e.product.price}
              <IoTrashBinOutline onClick={() => removeItem(e)} />
            </ContainerValueAndTrash>

          </ContainerResumeProducts>
        ))
      )}
    </>
  );
};

export default ResumeProducts;

const ContainerValueAndTrash = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`