import { AiOutlineHome, AiOutlineYoutube } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import { useContext } from "react";
import { MyContext } from "../../App";
import { MenuContainer, MenuItem, Link } from "./Menu.style";
const Menu = () => {
    const { isSlide } = useContext(MyContext);
    return (
        <MenuContainer>
            <MenuItem>
                <Link to="/">
                    <AiOutlineHome size={20} />
                    {isSlide && <div>전체보기</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page2">
                    <BsTwitch size={20} />
                    {isSlide && <div>인기상품</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page3">
                    <AiOutlineYoutube size={20} />
                    {isSlide && <div>신상품</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page4">
                    <BiWon size={20} />
                    {isSlide && <div>추천상품</div>}
                </Link>
            </MenuItem>
        </MenuContainer>
    );
};

export default Menu;
