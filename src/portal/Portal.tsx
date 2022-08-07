import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactElement }) => {
    // Modal 렌더링 위치 설정
    const modalEl = document.getElementById("modal") as Element;
    // createRoot의 첫번째 인자: 렌더링할 React자식, 두번째 인자: DOM 엘리먼트
    return ReactDOM.createPortal(children, modalEl);
};

export default ModalPortal;
