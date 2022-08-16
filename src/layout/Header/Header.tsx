import { Background, TitleContent } from "./Header.style";
import { IReactNode } from "../../App.interface";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = ({ children }: IReactNode) => {
    const { isSlide } = useContext(MyContext);
    return (
        <>
            <Background isSlide={isSlide}>
                <HeaderContent>{children}</HeaderContent>
            </Background>
        </>
    );
};

const HeaderContent = ({ children }: IReactNode) => {
    return <TitleContent>{children}</TitleContent>;
};

export default Header;
