import styled from "styled-components";
import { FaCcDiscover, FaCcMastercard, FaCcPaypal, FaRegCreditCard, FaCcVisa } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterDiv>
            <PaymentsMethodsDiv>
                <FaCcVisa size="50" color="#FFEAD9"></FaCcVisa>
                <FaCcMastercard size="50" color="#FFEAD9"></FaCcMastercard>
                <FaCcPaypal size="50" color="#FFEAD9"></FaCcPaypal>
                <FaCcDiscover size="50" color="#FFEAD9"></FaCcDiscover>
                <FaRegCreditCard size="50" color="#FFEAD9"></FaRegCreditCard>
            </PaymentsMethodsDiv>
            <FooterInfo>
                <p>Copyright &#169; 2023 | Pet Heaven | Todos os direitos reservados.</p>
            </FooterInfo>
        </FooterDiv>
    );
};

const FooterDiv = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #0B508A;
`;

const PaymentsMethodsDiv = styled.div`
    margin-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const FooterInfo = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 14px;

    p {
        color: #FFEAD9;
        font-size: 12px;
        font-weight: 500;
        font-family: 'Roboto Slab', serif;
    }
`;

export default Footer;