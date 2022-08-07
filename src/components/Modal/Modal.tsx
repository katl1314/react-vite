import { loginType } from "../../util/reducer/loginReducer";
import { ModalWrap, ModalView, ModalTitle, CloseIcon } from "./Modal.style";
import React from "react";
import { modalStateHandler } from "../../util/modal/modal.utils";
const Modal = ({
    modalRef,
    modalWrapRef,
    children,
}: {
    modalRef: React.RefObject<HTMLDivElement>;
    modalWrapRef: React.RefObject<HTMLDivElement>;
    children: React.ReactElement;
}) => {
    const handlerClose = () => {
        modalStateHandler(modalRef, modalWrapRef, "close");
    };
    return (
        <>
            <ModalWrap ref={modalWrapRef}></ModalWrap>
            <ModalView ref={modalRef}>
                <ModalTitle>
                    <CloseIcon size={20} onClick={handlerClose} />
                </ModalTitle>
                <ModalBody>{children}</ModalBody>
            </ModalView>
        </>
    );
};

const ModalBody = ({ children }: { children: React.ReactElement }) => {
    return <div style={{ height: "calc(100% - 30px)" }}>{children}</div>;
};

export default Modal;
