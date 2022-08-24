import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../../App";
import PageRouter from "../../Router/PageRouter";

const Main = () => {
    const { isSlide } = useContext(MyContext);
    return (
        <MainWrap isSlide={isSlide}>
            <PageRouter />
        </MainWrap>
    );
};

const MainWrap = styled.main`
    padding: 1vh 1vh;
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
    transition: 0.5s;
    width: 100%;
    margin-left: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "250px" : "50px"};
`;

export default Main;
