import { useRef, createContext, useState } from "react";
import ModalPortal from "./portal/Portal";
import { ILogin } from "./App.interface";
// layout
import Header from "./layout/Header";
import Content from "./layout/Content";
import Navigator from "./layout/Navigator";
// components
import Modal from "./components/Modal";
import Gnb from "./components/Gnb";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";

import "./App.css";

const defaultLoginState = {
    isLogin: false,
};

export const MyContext = createContext<ILogin>(defaultLoginState);

function App() {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalWrapRef = useRef<HTMLDivElement>(null);
    const [isLogin, setIsLogin] = useState(false);

    return (
        <MyContext.Provider value={{ isLogin }}>
            <Header>
                <Logo />
                <Gnb
                    modalRef={modalRef}
                    modalWrapRef={modalWrapRef}
                    setIsLogin={setIsLogin}
                />
            </Header>
            <Navigator />
            <Content />
            <ModalPortal>
                <Modal
                    modalRef={modalRef}
                    modalWrapRef={modalWrapRef}
                    children={
                        <LoginForm
                            modalRef={modalRef}
                            modalWrapRef={modalWrapRef}
                            setIsLogin={setIsLogin}
                        />
                    }
                />
            </ModalPortal>
        </MyContext.Provider>
    );
}

export default App;
