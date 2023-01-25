import { useState } from "react";
import styled from "styled-components";

const AddItem = () => {
  const [count, setCount] = useState(0);

  const oneMoreItem = () => {
    let newCount = count + 1;
    setCount(newCount);
    console.log(newCount);
  };

  const oneLessItem = () => {
    let newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);
      console.log(newCount);
    }
  };
  return (
    <ContainerAddItem>
      <button onClick={oneLessItem}>-</button>
      <input placeholder={count}></input>
      <button onClick={oneMoreItem}>+</button>
    </ContainerAddItem>
  );
};

export default AddItem;

const ContainerAddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  input {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: none;

    ::placeholder {
      text-align: center;
      font-size: 17px;
      font-weight: 700;
      color: #0b508a;
    }
  }

  button {
    width: 30px;
    height: 30px;

    border: none;
    background-color: #0b508a;
    border-radius: 5px;

    font-size: 20px;
    font-weight: bold;
    color: #FF862D;
  }
`;
