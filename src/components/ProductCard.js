import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { isMobile } from 'react-device-detect';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ProductCard = ({ id, name, price, image, category, requestId }) => {
    const [buttonOpacity, setButtonOpacity] = useState(0.0);

    const navigate = useNavigate();

    const navigateTo = (link) => navigate(`/product/${link}`);

    async function addProductToCart(id) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/addCart/${id}`, {}, {
                headers: {
                    "X-Request-ID": requestId,
                }
            });
        } catch (_) {
            alert("Erro ao adicionar produto ao carrinho!");
        }
    }

    return (
        <ProductCardDiv onMouseEnter={() => setButtonOpacity(1.0)} onMouseLeave={() => setButtonOpacity(0.0)}>
            <ProductCardContainer category={category} onClick={() => navigateTo(id)}>
                <img src={image} alt=""></img>
                <div>
                    <CategoryName>{category}</CategoryName>
                    <ProductName>{name}</ProductName>
                    <PriceText>R$ {price}</PriceText>
                </div>
            </ProductCardContainer>
            <AddToCartBtn opacity={buttonOpacity} onClick={() => addProductToCart(id)}>
                <FaShoppingCart color="#FAFAFA" size="22"></FaShoppingCart>
                Adicionar ao carrinho
            </AddToCartBtn>
        </ProductCardDiv>
    )
};

const ProductCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`;

const ProductCardContainer = styled.div`
    min-width: 263px;
    max-width: 263px;
    min-height: ${props => props.category === "vale-presente" ? "230" : "440"}px;
    max-height: ${props => props.category === "vale-presente" ? "350" : "440"}px;
    margin-bottom: 10px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid #E4E7ED;

    img {
        margin-top: 20px;
        width: 210px;
        height: ${props => props.category === "vale-presente" ? "160" : "210"}px;
        object-fit: fill;
    }

    div {
        width: 100%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: center;
    }

    &:hover {
        border: 2px solid #0B508A;
    }
`;

const CategoryName = styled.p`
    font-size: 12px !important;
    font-weight: 300 !important;
    color: #8D99AE !important;
    text-transform: uppercase;
`;

const ProductName = styled.p`
    width: 80%;
    margin-top: -10px;
    color: #000000 !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    text-transform: uppercase;
`;

const PriceText = styled.p`
    margin-top: -20px;
    color: #0B508A;
    font-size: 22px !important;
    font-weight: 700 !important;
    text-transform: uppercase;
`;

const AddToCartBtn = styled.button`
    padding: 20px 0px;
    border: none;
    margin-top: -10px;
    background-color: #0B508A !important;
    color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: 'DynaPuff', cursive;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    opacity: ${props => isMobile ? 1.0 : props.opacity};

    &:hover {
        background-color: #0A3979 !important;
    }
`;

export default ProductCard;