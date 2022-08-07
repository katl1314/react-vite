import { useContext } from "react";
import { MyContext } from "../../App";
import { modalStateHandler } from "../../util/modal/modal.utils";
import { SubMenuContent, Button } from "./Gnb.style";
const Gnb = ({
    modalRef,
    modalWrapRef,
    setIsLogin,
}: {
    modalRef: any;
    modalWrapRef: any;
    setIsLogin: (isLogin: boolean) => void;
}) => {
    const myContext = useContext(MyContext);
    const { isLogin } = myContext;

    const handlerLogin = () => {
        if (!isLogin) {
            modalStateHandler(modalRef, modalWrapRef, "open");
            return;
        }
        confirm("정말로 로그아웃 하시겠습니까?") && setIsLogin(false);
    };

    return (
        <SubMenuContent>
            <Button onClick={handlerLogin}>
                {isLogin ? "로그아웃" : "로그인"}
            </Button>
        </SubMenuContent>
    );
};

export default Gnb;
