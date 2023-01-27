import styled from "styled-components";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <CategoriesDiv>
            <CategoryLink to="#cachorro">Cachorro</CategoryLink>
            <CategoryLink to="#gato">Gato</CategoryLink>
            <CategoryLink to="#roedores">Roedores</CategoryLink>
            <CategoryLink to="#vale-presente">Vale-Presente</CategoryLink>
        </CategoriesDiv>
    );
};

const CategoriesDiv = styled.div`
    position: relative;
    width: 100% !important;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-bottom: 3px solid #0B508A44;
`;

const CategoryLink = styled(Link)`
    color: #0B508A;
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;

    &:hover {
        opacity: 0.7;
    }
`;

export default Categories;