import styled from "styled-components";

export const ContainerResumeProducts = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  grid: auto-flow / 1fr 2fr;

  text-align: center;
  color: #808080;
  border-radius: 10px;

  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  width: 380px;
  height: 200px;
  background-color: #f7f4ed;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 0 auto;
  }

  p {
    text-align: left;
  }

  div {
    font-size: 25px;
    color: #ff862d;
    font-weight: 700;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const ContainerAddItem = styled.div`
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
    color: #ff862d;
  }

`;
