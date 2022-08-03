import {
    useContext,
    useReducer,
    useRef,
    createContext,
    memo,
    MutableRefObject,
} from "react";
import styled from "styled-components";
import { loginReducer } from "./util/reducer";
import Header from "./layout/Header/Header";
import Navigator from "./layout/Navigator/Navigator";
import Content from "./layout/Content";
import Modal from "./components/Modal";
import { ILogin } from "./App.interface";
import "./App.css";

export const MyContext = createContext<ILogin>({
    isLogin: false,
});

function App() {
    const [isLogin, dispatch] = useReducer(loginReducer, {
        isLogin: false,
    });
    const modalRef = useRef<HTMLDivElement>(null);
    return (
        <MyContext.Provider value={isLogin}>
            <Header>
                <Logo />
                <SubMenu modalRef={modalRef} />
            </Header>
            <Navigator />
            <Content />
            <Modal modalRef={modalRef} setIsLogin={dispatch} />
        </MyContext.Provider>
    );
}

const Logo = memo(() => {
    return <H1>Logo</H1>;
});

const SubMenu = ({ modalRef }: { modalRef: any }) => {
    const myContext = useContext(MyContext);
    const { isLogin } = myContext;
    const handlerLogin = () => {
        if (!isLogin) {
            modalRef.current.style.display = "flex";
        }
    };

    return (
        <SubMenuContent>
            <Button onClick={handlerLogin}>로그인</Button>
        </SubMenuContent>
    );
};

const H1 = styled.h1`
    font-size: 25px; // 폰트
    height: 70px; // 높이
    font-weight: 600; // bold 굵기
    line-height: 70px; // 줄 높이
    color: #fff; // 색상
`;

const SubMenuContent = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    background: transparent; // 배경은 투명색
    color: white; // 글꼴 색상은 흰색
    border: 1px solid white; // 테두리 흰색
    margin: 5px; // 마진 5px
    cursor: pointer;
    // 트랜지션 (효과)
    transition-timing-function: ease-in;
    transition-duration: 0.5s;
    height: 35px;
    width: 85px;
    &:hover {
        background-color: white;
        color: black;
    }
`;

export default App;
