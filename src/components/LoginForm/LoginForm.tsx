import { Form, Label, Input, Button } from "./LoginForm.style";
import { modalStateHandler } from "../../util/modal/modal.utils";
import { RefObject, useRef, useState } from "react";

const LoginForm = ({
    modalRef,
    modalWrapRef,
    // setIsLogin,
    setLoginData,
}: {
    modalRef: RefObject<HTMLDivElement>;
    modalWrapRef: RefObject<HTMLDivElement>;
    // setIsLogin: (isLogin: boolean) => void;
    setLoginData: (loginData: {
        id: string;
        password: string;
        isLogin: boolean;
    }) => void;
}) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [validateId, setValidateId] = useState(true);
    const [validatePwd, setValidatePwd] = useState(true);

    const handlerLoginClick = () => {
        // id, password 체크
        const id = idRef.current?.value;
        const password = passwordRef.current?.value;
        if (!id) {
            setValidateId(false);
            return;
        }
        setValidateId(true);

        if (!password) {
            setValidatePwd(false);
            return;
        }
        setValidatePwd(true);
        setLoginData({ id, password, isLogin: true });
        modalStateHandler(modalRef, modalWrapRef, "close");
    };

    let validateIdText = !validateId && "아이디를 입력해 주세요.";
    let validatePwdText = !validatePwd && "비밀번호를 입력해 주세요.";

    return (
        <Form>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    padding: "10px 10px",
                }}
            >
                로그인
            </div>
            <div style={{ padding: "10px 0 0" }}>
                <Label type="info">아이디</Label>
                <Input type="text" id="id" name="id" ref={idRef} />
                <Label type="warn">{validateIdText}</Label>
            </div>
            <div style={{ padding: "10px 0 0" }}>
                <Label type="info">비밀번호</Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                />
                <Label type="warn">{validatePwdText}</Label>
            </div>
            <div style={{ margin: "25px 0" }}>
                <Button type="button" onClick={handlerLoginClick}>
                    로그인
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
