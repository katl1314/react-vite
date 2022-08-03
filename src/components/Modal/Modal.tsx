import { AiOutlineClose } from "react-icons/ai";
import { loginType } from "../../util/reducer/loginReducer";
import { ModalWrap, ModalView, ModalTitle, Icon } from "./Modal.style";
import React from "react";
const Modal = ({
    modalRef,
    setIsLogin,
}: {
    modalRef: React.RefObject<HTMLDivElement>;
    setIsLogin: (action: { type: loginType }) => void;
}) => {
    const handlerClose = () => {
        // modalRef.current.style.display = "none";
    };
    return (
        <ModalWrap ref={modalRef}>
            <ModalView>
                <ModalTitle>
                    <Icon>
                        <AiOutlineClose size={30} onClick={handlerClose} />
                    </Icon>
                </ModalTitle>
                <input type="text"></input>
            </ModalView>
        </ModalWrap>
    );
};

export default Modal;
