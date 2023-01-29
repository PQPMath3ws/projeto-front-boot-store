import axios from "axios";
import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";

import { CategoryDiv, ProductsDiv, ShopDiv, ShopProductsDiv, ShopProductsContainerDiv } from "../styles/ShopStyles";

const Shop = () => {
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const [products, setProducts] = useState([]);

    async function generateUserId() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/new-user`);
        return request.data;
    }

    async function getShopItems() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-products`);
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
        getShopItems().then(items => {
            setProducts(items);
        }).catch(_ => {
            window.location.reload(false);
        });
    }, [userId]);

    return (
        <ShopDiv>
            <Header user={userId}></Header>
            <Categories></Categories>
            <ShopProductsDiv>
                <ShopProductsContainerDiv>
                    <CategoryDiv id="cachorro">
                        <p>ÍTENS PARA CACHORROS</p>
                        <ProductsDiv>
                            {products.cachorro && products.cachorro.map(produto => <ProductCard key={produto._id} id={produto._id} name={produto.name} price={produto.descountPrice ? produto.descountPrice : produto.price} image={produto.image} category={produto.category} requestId={userId}>
                            </ProductCard>)}
                        </ProductsDiv>
                    </CategoryDiv>
                    <CategoryDiv id="gato">
                        <p>ÍTENS PARA GATOS</p>
                        <ProductsDiv>
                            {products.gato && products.gato.map(produto => <ProductCard key={produto._id} id={produto._id} name={produto.name} price={produto.descountPrice ? produto.descountPrice : produto.price} image={produto.image} category={produto.category} requestId={userId}>
                            </ProductCard>)}
                        </ProductsDiv>
                    </CategoryDiv>
                    <CategoryDiv id="roedores">
                        <p>ÍTENS PARA ROEDORES</p>
                        <ProductsDiv>
                            {products.roedores && products.roedores.map(produto => <ProductCard key={produto._id} id={produto._id} name={produto.name} price={produto.descountPrice ? produto.descountPrice : produto.price} image={produto.image} category={produto.category}  requestId={userId}>
                            </ProductCard>)}
                        </ProductsDiv>
                    </CategoryDiv>
                    <CategoryDiv id="vale-presente">
                        <p>VALES-PRESENTES</p>
                        <ProductsDiv>
                            {products.vale_presente && products.vale_presente.map(produto => <ProductCard key={produto._id} id={produto._id} name={produto.name} price={produto.descountPrice ? produto.descountPrice : produto.price} image={produto.image} category={produto.category}  requestId={userId}>
                            </ProductCard>)}
                        </ProductsDiv>
                    </CategoryDiv>
                </ShopProductsContainerDiv>
            </ShopProductsDiv>
            <Footer></Footer>
        </ShopDiv>
    );
};

export default Shop;