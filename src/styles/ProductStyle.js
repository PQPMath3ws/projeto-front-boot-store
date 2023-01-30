import styled from "styled-components";

const ProductDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const ShopProductDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ShopProductContainerDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 90%;
`;

const CategoryText = styled.p`
    font-family: 'DynaPuff', cursive;
    font-weight: 900;
    color: #8D99AE;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const ProductImage = styled.img`
    width: 400px;
`;

const ProductName = styled.p`
    margin-top: 10px;
    color: #000000;
    font-family: 'DynaPuff', cursive;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
`;

const ProductPriceDiv = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ProductPriceText = styled.p`
    font-family: 'DynaPuff', cursive;
    color: ${props => props.hasDescount ? "#8E99BE" : "#0B508A"};
    font-size: ${props => props.hasDescount ? 30 :32}px;
    font-weight: ${props => props.hasDescount ? 400 :700};
    text-transform: uppercase;
    ${props => props.hasDescount ? "text-decoration: line-through;" : ""}
`;

const AddToCartBtn = styled.button`
    padding: 20px 0px;
    width: 100%;
    border: none;
    margin-top: 10px;
    background-color: #0B508A;
    color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: 'DynaPuff', cursive;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        background-color: #0A3979 !important;
    }
`;

export { AddToCartBtn, CategoryText, ProductDiv, ProductImage, ProductName, ProductPriceDiv, ProductPriceText, ShopProductContainerDiv, ShopProductDiv };