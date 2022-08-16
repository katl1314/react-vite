import { useRef, createContext, useState, useContext } from "react";
import ModalPortal from "./portal/Portal";
import { ILogin, IReactNode } from "./App.interface";
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

const defaultLoginData = {
    isLogin: true,
    id: "",
    password: "",
};

export const MyContext = createContext<ILogin>({
    ...defaultLoginData,
    isSlide: true,
});

function App() {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalWrapRef = useRef<HTMLDivElement>(null);
    const [loginData, setLoginData] = useState(defaultLoginData);
    const [isSlide, setSlide] = useState(true);
    return (
        <MyContext.Provider value={{ ...loginData, isSlide: isSlide }}>
            <Header>
                <Logo />
            </Header>
            <Navigator setSlide={setSlide} />
            <Content>
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
    height: calc(100% - 50px);
    transition: 0.5s;
    width: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "calc(100% - 250px)" : "calc(100% - 50px)"};
    margin-left: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "250px" : "50px"};
`;

export default App;
