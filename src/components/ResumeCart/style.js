import styled from "styled-components";


export const ContainerResumeCart = styled.section`
    width: 380px;
    height: 150px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 15px;
    box-sizing: border-box;
    padding: 15px;
    margin: 10px auto;

    margin-bottom: 80px;

    h1{
        font-size: 20px;
        font-weight: 700;
        color: #FF862D;
        margin-bottom: 10px;
    }
    hr{
        border: 1px solid #0B508A;
        width: 100%;
    }

    @media screen and (min-width: 800px) {
      width: 100%;
      margin-bottom: 20px;
    }

`

export const Box1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  color: grey;
  font-size: 15px;
`;

export const Box2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  color: grey;
  font-size: 15px;
`;

export const Box3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  color: grey;
  font-size: 15px;

  color: green;
`;

export const Box4 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  color: #0B508A;
  font-size: 20px;
  font-weight: 700;
`;

export const BtnTotal = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #0B508A;

  font-size: 14px;
  font-weight: 700;
  color: white;
`;
