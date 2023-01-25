import Categories from "../components/Categories";
import Header from "../components/Header";

import { ShopDiv } from "../styles/ShopStyles";

const Shop = () => {
    return (
        <ShopDiv>
            <Header></Header>
            <Categories></Categories>
        </ShopDiv>
    );
};

export default Shop;