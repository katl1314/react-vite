import styled from "styled-components";

export const ModalWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 9999;
    position: absolute;
    top: 0px;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.83, 0.34, 1, 1);
    display: none;
    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.div`
    width: 600px;
    height: 600px;
    display: block;
    transition-delay: 300ms;
    background: white;
`;

export const ModalTitle = styled.div`
    width: 100%;
    height: 30px;
    background-color: lightgray;
    border-bottom: 1px solid black;
    position: relative;
`;

export const Icon = styled.div`
    height: 100%;
    position: absolute;
    right: 5px;
    cursor: pointer;
`;
