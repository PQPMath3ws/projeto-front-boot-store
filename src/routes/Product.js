import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { AddToCartBtn, CategoryText, ProductDiv, ProductImage, ProductName, ProductPriceDiv, ProductPriceText, ShopProductContainerDiv, ShopProductDiv } from "../styles/ProductStyle";

const Product = () => {
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));
    const [product, setProduct] = useState({});

    const { id } = useParams();

    async function generateUserId() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/new-user`);
        return request.data;
    }

    async function getProductById() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-product/${id}`);
        return request.data;
    }

    async function addProductToCart(id) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/addCart/${id}`, {}, {
                headers: {
                    "X-Request-ID": userId,
                }
            });
            alert("Produto adicionado ao carrinho!");
        } catch (_) {
            alert("Erro ao adicionar produto ao carrinho!");
        }
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
        getProductById().then(data => {
            setProduct(data);
        }).catch(_ => {
            window.location.reload(false);
        });
    }, []);

    if (!id) return (<Navigate to="/"></Navigate>);

    return (
        <ProductDiv>
            <Header user={userId}></Header>
            <ShopProductDiv>
                <ShopProductContainerDiv>
                    <CategoryText>Categoria: {product.category}</CategoryText>
                    <ProductImage src={product.image}></ProductImage>
                    <ProductName>{product.name}</ProductName>
                    <ProductPriceDiv>
                        {product.descountPrice && product.price ? <>
                            <ProductPriceText hasDescount={true}>
                                R$ {parseFloat(product.price).toFixed(2)}
                            </ProductPriceText>
                            <ProductPriceText hasDescount={false}>
                                R$ {parseFloat(product.descountPrice).toFixed(2)}
                            </ProductPriceText>
                        </> : <ProductPriceText hasDescount={false}>
                            R$ {parseFloat(product.price).toFixed(2)}
                            </ProductPriceText>}
                    </ProductPriceDiv>
                    <AddToCartBtn onClick={() => addProductToCart(product._id)}>
                        <FaShoppingCart color="#FAFAFA" size="26"></FaShoppingCart>
                        Adicionar ao carrinho
                    </AddToCartBtn>
                </ShopProductContainerDiv>
            </ShopProductDiv>
            <Footer></Footer>
        </ProductDiv>
    )
};

export default Product;