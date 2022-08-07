import React from "react";

type ModalStatueType = "open" | "close";

export const modalStateHandler = (
    modalRef: React.RefObject<HTMLDivElement>,
    modalWrapRef: React.RefObject<HTMLDivElement>,
    state: ModalStatueType
) => {
    const modalDom = modalRef?.current as HTMLDivElement;
    const modalWrapDom = modalWrapRef?.current as HTMLDivElement;
    if (state === "open") {
        modalDom.style.opacity = "1";
        modalWrapDom.style.display = "block";
        return;
    }

    if (state === "close") {
        modalDom.style.opacity = "0";
        modalWrapDom.style.display = "none";
    }
};
