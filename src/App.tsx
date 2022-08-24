import { useRef, createContext, useState, useContext, useEffect } from "react";
import ModalPortal from "./portal/Portal";
import { IApp, IReactNode } from "./App.interface";
// layout
import Header from "./layout/Header";
import Navigator from "./layout/Navigator";
import Footer from "./layout/Footer";

// components
import Modal from "./components/Modal";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";

import "./App.css";
import styled from "styled-components";
import Main from "./layout/Main";

import { useQuery } from "react-query";
import { getProduct } from "./util/async/AsyncProduct";
import { IProduct } from "./Page/interface/Product.interface";
import useProduct from "./Hook/useProduct";

const defaultLoginData = {
    isLogin: false,
    id: "",
    password: "",
};

export const MyContext = createContext<IApp>({
    ...defaultLoginData,
    isSlide: true,
});

function App() {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalWrapRef = useRef<HTMLDivElement>(null);
    const [loginData, setLoginData] = useState(defaultLoginData);
    const [isSlide, setSlide] = useState(defaultLoginData.isLogin);

    return (
        <MyContext.Provider value={{ ...loginData, isSlide: isSlide }}>
            <Header>
                <Logo />
            </Header>
            <Content>
                <Navigator setSlide={setSlide} />
                <Main />
            </Content>
            <Footer />
            <ModalPortal>
                <Modal
                    modalRef={modalRef}
                    modalWrapRef={modalWrapRef}
                    children={
                        <LoginForm
                            modalRef={modalRef}
                            modalWrapRef={modalWrapRef}
                            setLoginData={setLoginData}
                        />
                    }
                />
            </ModalPortal>
        </MyContext.Provider>
    );
}

const Content = ({ children }: IReactNode) => {
    const { isSlide } = useContext(MyContext);
    return <ContentWrap isSlide={isSlide}>{children}</ContentWrap>;
};

const ContentWrap = styled.div`
    transition: 0.5s;
    display: flex;
    position: relative;
    height: 100%;
    width: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "calc(100% + 250px)" : "calc(100% + 50px)"};
`;

export default App;
