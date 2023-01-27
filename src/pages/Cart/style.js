import styled from "styled-components";

export const CartContainer = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1100px;
    height: 640px;
    margin: 0 auto;
  }
`;

export const CartContainer1 = styled.div`
  @media screen and (min-width: 800px){
    overflow-y: auto;
    width: auto;
    height: 640px;
  }

`

export const CartContainer2 = styled.div`
  @media screen and (min-width: 800px) {
    width: auto;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;

    float: right;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 800px) {
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 15px;
    border: none;
    font-size: 15px;

    background-color: #ff862d;
    color: white;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  display: none;
`;
