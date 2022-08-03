import React, { Fragment } from "react";
import { Background, TitleContent } from "./Header.style";
import { IHeader } from "./Header.interface";

const Header = ({ children }: IHeader) => {
    return (
        <>
            <Background>
                <HeaderContent>{children}</HeaderContent>
            </Background>
        </>
    );
};

const HeaderContent = ({ children }: IHeader) => {
    return <TitleContent>{children}</TitleContent>;
};

export default Header;
