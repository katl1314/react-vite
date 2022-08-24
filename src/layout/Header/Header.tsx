import { Background, TitleContent } from "./Header.style";
import { IReactNode } from "../../App.interface";

const Header = ({ children }: IReactNode) => {
    return (
        <>
            <Background>
                <HeaderContent>{children}</HeaderContent>
            </Background>
        </>
    );
};

const HeaderContent = ({ children }: IReactNode) => {
    return <TitleContent>{children}</TitleContent>;
};

export default Header;
