import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ShopDiv } from "../styles/ShopStyles";

const Shop = () => {
    return (
        <ShopDiv>
            <Header></Header>
            <Categories></Categories>
            <Footer></Footer>
        </ShopDiv>
    );
};

export default Shop;