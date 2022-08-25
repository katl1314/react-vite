import { useContext } from "react";
import styled from "styled-components";
import PageRouter from "../../Router/PageRouter";

const Main = () => {
    return (
        <MainWrap>
            <PageRouter />
        </MainWrap>
    );
};

const MainWrap = styled.main`
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
    transition: 0.5s;
    width: 100%;
`;

export default Main;
