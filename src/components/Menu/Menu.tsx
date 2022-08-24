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
                    {isSlide && <div>홈</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page2">
                    <BsTwitch size={20} />
                    {isSlide && <div>상품재고관리</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page3">
                    <BiWon size={20} />
                    {isSlide && <div>매출액관리</div>}
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/page4">
                    <AiOutlineYoutube size={20} />
                    {isSlide && <div>인력관리</div>}
                </Link>
            </MenuItem>
        </MenuContainer>
    );
};

export default Menu;
