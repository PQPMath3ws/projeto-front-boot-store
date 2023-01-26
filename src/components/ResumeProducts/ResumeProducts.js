import { ContainerResumeProducts, ContainerAddItem } from "./style";
import { useContext, useState } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";

const ResumeProducts = () => {
  const { productsInfo, setProductsInfo } = useContext(ResumeProductsContext);

  let length = productsInfo.value;

  //Functions of button add item

  const oneMoreItem = (e) => {
    const arr = [...productsInfo];

    arr.forEach((elm, i) => {
      if (elm === e) {
        let newAmount = elm.amount + 1;
        let val = parseFloat(elm.value) + parseFloat(elm.originalValue);
        elm.value = val.toFixed(2);
        elm.amount = newAmount;
      }
    });

    setProductsInfo(arr);
  };

  const oneLessItem = (e) => {
    const arr = [...productsInfo];

    arr.forEach((elm, i) => {
      if (elm === e) {
        if (elm.amount > 1) {
          let newAmount = elm.amount - 1;
          let val = parseFloat(elm.value) - parseFloat(elm.originalValue);
          elm.value = val.toFixed(2);
          elm.amount = newAmount;
        }
      }
    });

    setProductsInfo(arr);
  };

  return (
    <>
      {length === "" ? (
        <h1>Você não tem produtos lançados</h1>
      ) : (
        productsInfo.map((e) => (
          <ContainerResumeProducts key={e.id}>
            <img src={e.imgLink} alt="a product of my site" key={e.imgLink} />
            <p key={e.description}>{e.description}</p>
            <ContainerAddItem>
              <button onClick={() => oneLessItem(e)}>-</button>
              <input placeholder={e.amount}></input>
              <button onClick={() => oneMoreItem(e)}>+</button>
            </ContainerAddItem>
            <div>R$ {e.value}</div>
          </ContainerResumeProducts>
        ))
      )}
    </>
  );
};

export default ResumeProducts;
