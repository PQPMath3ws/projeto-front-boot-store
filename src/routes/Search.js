import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { ProductDiv, ProductsDiv, SearchDiv, SearchContainerDiv, SearchResultsDiv, SearchText } from "../styles/SearchStyle";

const Search = () => {
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const [searchResult, setSearchResult] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const { search } = {...location.state};

    async function generateUserId() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/new-user`);
        return request.data;
    }

    async function searchProducts() {
        const request = await axios.post(`${process.env.REACT_APP_API_URL}/api/search`, { search });
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
        searchProducts().then(data => {
            setSearchResult(data);
        }).catch(_ => {
            navigate("/");
        });
    }, []);

    return (
        <SearchDiv>
            <Header user={userId}></Header>
            <SearchResultsDiv>
                <SearchContainerDiv>
                    <SearchText>Resultados da Busca</SearchText>
                    <ProductsDiv>
                        <ProductDiv>
                            {searchResult && searchResult.map(produto => <ProductCard key={produto._id} id={produto._id} name={produto.name} price={produto.descountPrice ? produto.descountPrice : produto.price} image={produto.image} category={produto.category} requestId={userId}>
                            </ProductCard>)}
                        </ProductDiv>
                    </ProductsDiv>
                </SearchContainerDiv>
            </SearchResultsDiv>
            <Footer></Footer>
        </SearchDiv>
    );
};

export default Search;