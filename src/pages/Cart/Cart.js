import ResumeCart from "../../components/ResumeCart/ResumeCart";
import ResumeProducts from "../../components/ResumeProducts/ResumeProducts";
import { CartContainer, CartContainer1, CartContainer2, Button } from "./style";
import styled from "styled-components";
import Title from "../../components/CartTitle";
import FreightCalculator from "../../components/FreightCalculator/FreightCalculator";
import CartFooter from "../../components/CartFooter";
import { useEffect, useState } from "react";
import ResumeProductsContext from "../../context/ResumeProductsContext";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer";

const Carrinho = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [cep, setCep] = useState(0);
  const [userTotal, setUserTotal] = useState(0)
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));

  const navigate = useNavigate();

  async function generateUserId() {
    const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/new-user`);
    return request.data;
  }

  async function getUserCart() {
    const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-user-cart`, {
      headers: {
        "X-Request-ID": userId,
      }
    });
    return request.data;
  }

  useEffect(() => {
    if (!userId) {
      generateUserId().then(data => {
          setUserId(data.token);
          localStorage.setItem("user_id", data.token);
      }).catch(_ => {
          window.location.reload(false);
      });
    }
    getUserCart().then(data => {
      setProductsInfo(data);
    }).catch(_ => {
      navigate("/");
    });
  }, []);

  const handleClick = () => {

    const body = {
      user: userId,
      valueTotal: userTotal,
      freight: cep,
      products: productsInfo
    }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/checkout`, body)

    promise.then(res => {
      alert(res.data)
      window.location.reload(false);
    })
    promise.catch(err => {
      console.log(err.response)
    })

  }

  return (
    <ResumeProductsContext.Provider
      value={{ productsInfo, setProductsInfo, total, setTotal, setCep, cep, userTotal, setUserTotal, userId }}
    >
      <Container>
        <Header user={userId}></Header>
        <Title />
        <CartContainer>
          <CartContainer1>
            <ResumeProducts />
          </CartContainer1>
          <CartContainer2>
            <FreightCalculator />
            <ResumeCart />
            <Button onClick={() => handleClick()}>Finalizar Compra</Button>
          </CartContainer2>
        </CartContainer>
        <CartFooter />
        <Footer></Footer>
      </Container>
    </ResumeProductsContext.Provider>
  );
};

export default Carrinho;

// provisory style

const Container = styled.main`
  width: 100%;
  height: auto;
  position: absolute;
`;
