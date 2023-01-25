import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaPaw, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const navigateTo = (link) => navigate(link);

    return (
        <HeaderDiv>
            <HeaderContainerDiv>
                <LogoDiv>
                    <FaPaw size="30" color="#FFEAD9"></FaPaw>
                    <p>Pet Heaven</p>
                </LogoDiv>
                <SearchDiv>
                    <input onChange={(input) => setSearchText(input.target.value)} placeholder="Pesquisar..." type="text" value={searchText}></input>
                    <SearchIcon size="13" color="#767676"></SearchIcon>
                </SearchDiv>
                <LoginUserDiv onClick={() => navigateTo("/sign-in")}>
                    <BsPersonCircle size="22" color="#FFEAD9"></BsPersonCircle>
                    <p>Entrar / Cadastrar</p>
                </LoginUserDiv>
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
        color: #FFEAD9;
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
        height: 30px;
        padding-left: 30px;
        padding-right: 30px;
        border: 1px solid #E4E7ED;
        border-radius: 14px;
        box-sizing: border-box;
    }
`;

const SearchIcon = styled(FaSearch)`
    position: absolute;
    left: 12px;
    top: 9px;
`;

const LoginUserDiv = styled.div`
    position: absolute;
    display: flex;
    gap: 6px;
    align-items: center;
    top: 50%;
    transform: translate(0%, -50%);
    right: 20px;
    cursor: pointer;

    p {
        font-family: 'Roboto Slab', serif;
        color: #FFEAD9;
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