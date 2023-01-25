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

  img{
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  p{
    text-align: left;
  }

  div{
    font-size: 25px;
    color: #FF862D;
    font-weight: 700;
  }
`;
