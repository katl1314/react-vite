import styled from "styled-components";

export const Background = styled.header`
    background-color: #000;
    border-bottom: 1px solid #efefef;
    width: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "calc(100% - 250px)" : "calc(100% - 50px)"};
    transition: 0.5s;
    height: 50px;
    box-sizing: border-box;
    margin-left: ${({ isSlide }: { isSlide: boolean }) =>
        isSlide ? "250px" : "50px"};
`;

export const TitleContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`;
