import styled from "styled-components";

const SearchDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const SearchResultsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const SearchContainerDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 90%;
`;

const SearchText = styled.p`
    font-family: 'DynaPuff', cursive;
    font-weight: 900;
    color: #8D99AE;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const ProductsDiv = styled.div`
    width: 100%;
    overflow-x: scroll;
    p {
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        color: #0B508A;
        font-size: 24px;
        margin-bottom: 40px;
    }
`;

const ProductDiv = styled.div`
    display: flex;
    gap: 30px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-top: 4px;
    padding-bottom: 4px;
    scrollbar-width: thin;
`;

const NoSearchFoundText = styled.div`
    margin-top: 10px;
    color: #0B508A;
    font-family: 'DynaPuff', cursive;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
`;

export { NoSearchFoundText, ProductDiv, ProductsDiv, SearchDiv, SearchContainerDiv, SearchResultsDiv, SearchText };