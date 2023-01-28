import axios from "axios";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaPaw, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
    const [searchText, setSearchText] = useState("");
    const [cartInterval, setCartInterval] = useState(null);
    const [getCart, setCart] = useState([]);

    const navigate = useNavigate();

    const navigateTo = (link) => navigate(link);

    async function getUserCart() {
        const request = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-user-cart`, {
            headers: {
                "X-Request-ID": user,
            }
        });
        return request.data;
    }

    useEffect(() => {
        if (cartInterval) setCartInterval(clearInterval(cartInterval));
        setCartInterval(setInterval(() => {
            getUserCart().then(data => {
                setCart(data);
            }).catch(_ => {
                setCart([]);
            });
        }, 500));
    }, []);

    return (
        <HeaderDiv>
            <HeaderContainerDiv>
                <LogoDiv>
                    <FaPaw size="30" color="#FAFAFA"></FaPaw>
                    <p>Pet Heaven</p>
                </LogoDiv>
                <SearchDiv>
                    <input onChange={(input) => setSearchText(input.target.value)} placeholder="Pesquisar..." type="text" value={searchText}></input>
                    <SearchIcon size="13" color="#767676"></SearchIcon>
                </SearchDiv>
                <RightDiv>
                    <CartDiv>
                        <FaShoppingCart size="22" color="#FAFAFA"></FaShoppingCart>
                        <CartQuantityDiv>
                            <p>{getCart.length}</p>
                        </CartQuantityDiv>
                    </CartDiv>
                    <LoginUserDiv onClick={() => navigateTo("/sign-in")}>
                        <BsPersonCircle size="22" color="#FAFAFA"></BsPersonCircle>
                        <p>Entrar / Cadastrar</p>
                    </LoginUserDiv>
                </RightDiv>
            </HeaderContainerDiv>
        </HeaderDiv>
    )
};

const HeaderDiv = styled.div`
    position: relative;
    width: 100% !important;
    height: 70px;
    background-color: #0B508A;
    border-bottom: 1px solid #FFFFFF1F;
`;

const HeaderContainerDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const LogoDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 8px;
    left: 20px;
    top: 50%;
    transform: translate(0%, -50%);

    p {
        color: #FAFAFA;
        font-family: 'DynaPuff', cursive;
        font-weight: bold;
        font-size: 24px;
        margin-top: 4px;
    }
`;

const SearchDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-100%, -50%);
    input {
        width: 200%;
        height: 34px;
        padding-left: 32px;
        padding-right: 32px;
        border: 1px solid #E4E7ED;
        border-radius: 14px;
        box-sizing: border-box;
    }
`;

const SearchIcon = styled(FaSearch)`
    position: absolute;
    left: 12px;
    top: 11px;
`;

const RightDiv = styled.div`
    position: absolute;
    display: flex;
    text-align: center;
    gap: 30px;
    top: 50%;
    transform: translate(0%, -50%);
    right: 20px;
`;

const CartDiv = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 50px;
    height: 22px;
`;

const CartQuantityDiv = styled.div`
    position: absolute;
    background-color: #202020EE;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -12px;
    right: -14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    p {
        font-family: 'DynaPuff', cursive;
        color: #FAFAFA;
        font-size: 10px;
        font-weight: 700;
    }
`;

const LoginUserDiv = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    cursor: pointer;

    p {
        font-family: 'Roboto Slab', serif;
        color: #FAFAFA;
        font-size: 16px;
        font-weight: 600;
    }

    &:hover {
        opacity: 0.7;
        p {
            text-decoration: underline;
        }
    }
`;

export default Header;