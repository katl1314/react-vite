import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalWrap = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 9999;
    position: absolute;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.83, 0.34, 1, 1);
    display: none;
    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.div`
    width: 20rem;
    height: 550px;
    opacity: 0;
    display: none;
    background: white;
    position: absolute;
    top: 50%;
    z-index: 9999;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.15s linear;
    border-radius: 15px;
`;

export const ModalTitle = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    box-sizing: border-box;
`;

export const CloseIcon = styled(AiOutlineClose)`
    height: 100%;
    position: absolute;
    right: 5px;
    cursor: pointer;
`;
