import styled from "styled-components";

const ShopDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const ShopProductsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ShopProductsContainerDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 90%;
`;

const CategoryDiv = styled.div`
    p {
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        color: #0B508A;
        font-size: 24px;
        margin-bottom: 40px;
    }
`;

const ProductsDiv = styled.div`
    display: flex;
    gap: 30px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-top: 4px;
    padding-bottom: 4px;
`;

export { CategoryDiv, ProductsDiv, ShopDiv, ShopProductsDiv, ShopProductsContainerDiv };