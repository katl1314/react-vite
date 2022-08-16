import styled from "styled-components";
import Menu from "../../components/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../components/Logo";
import { useContext } from "react";
import { MyContext } from "../../App";
const Navigator = ({ setSlide }: { setSlide: (newState: boolean) => void }) => {
    const { isSlide } = useContext(MyContext);
    return (
        <NavigatorWrap isSlide={isSlide}>
            <Guide setSlide={setSlide} isSlide={isSlide} />
            <Menu />
        </NavigatorWrap>
    );
};

const Guide = ({
    setSlide,
    isSlide,
}: {
    setSlide: (newState: boolean) => void;
    isSlide: boolean;
}) => {
    const handlerSlide = () => {
        setSlide(!isSlide);
    };

    return (
        <div className="guide-menu">
            <SlideButton size="20" onClick={handlerSlide} />
        </div>
    );
};

const NavigatorWrap = styled.nav`
    height: 100%;
    width: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "250px" : "50px"};
    overflow: hidden;
    position: absolute;
    top: 0;
    background-color: white;
    border-right: 1px solid #efefef;
    transition: 0.5s;
    & .guide-menu {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #efefef;
        justify-content: ${({ isSlide }: { isSlide: boolean }) =>
            isSlide ? "right" : "center"};
    }
`;

const SlideButton = styled(GiHamburgerMenu)`
    cursor: pointer;
`;

export default Navigator;
