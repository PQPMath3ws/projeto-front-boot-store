import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 380px;
  height: auto;
  background-color: #f7f4ed;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 15%);
  padding: 15px;

  display: flex;
  flex-direction: column;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: #ff862d;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 60%;
  height: 45px;
  padding: 0 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  background-color: #0B508A;
  border: none;
  border-radius: 5px;
`;
