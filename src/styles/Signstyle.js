import styled from "styled-components";
import background from '../assents/img.jpg';


export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;


export const Limiter = styled.h1`
  width: 100%;
  margin: 0 auto;
  * {
	box-sizing: border-box;
}
`;


export const Container = styled.div`
   width: 100%;  
    min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;  

    &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,0.9);
  }
`;
export const Titulo = styled.div`
  margin: 30px;
  font-size: 20px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
`

export const WrapLog = styled.div`
  width: 500px;

  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;

  background: #0B508A;
  background: -webkit-linear-gradient(top, #0B508A, #FF862D);
  background: -o-linear-gradient(top, #0B508A, #FF862D);
  background: -moz-linear-gradient(top, #0B508A, #FF862D);
  background: linear-gradient(top, #0B508A, #FF862D);

   @media (max-width: 600px) {

     padding: 55px 15px 37px 15px;
   
  }

`;


export const Form = styled.form`
 width: 100%;
 span {
    color: white;
    font-size: 15px;
     .link {
      color: #fff;
      font-weight: 600;
      text-decoration: none;
    }
      display: flex;
    align-items: center;
    gap: 8px;
    transform: translate(0%, -50%);
     width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
 }
 
`;


export const WrapInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255,255,255,0.24);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 16px;
  color: #fff;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 40px;
  background: transparent;
  padding: 0 5px 0 10px;
   border: none;
    outline: 0;

  &:focus {
    padding-left: 15px;
  }
`;

export const FocusInput = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -22px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    background: #fff;
  }


  ${Input}:focus + &::before {
    width: 100%;
  }
`;


export const Button = styled.button`
  font-size: 16px;
  color: #555555;
  line-height: 1.2;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;

  border: none;
  background: -webkit-linear-gradient(top, #FF862D, #0B508A);
  position: relative;
  z-index: 1;

  transition: all 0.4s;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #FFEAD9;
    top: 0;
    left: 0;
    opacity: 1;

    transition: all 0.4s;
  }

  &:hover {
    color: #fff;
    &::before {
      opacity: 0;
    }
  }
`;
export const ContainerButton = styled.div`

  width: 100%;
  height:200px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    transform: translate(0%, -50%);
     width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
      p {
          color: #FFEAD9;
          font-family: 'DynaPuff', cursive;
          font-weight: bold;
          font-size: 35px;
      }

`;