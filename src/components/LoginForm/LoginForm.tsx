import { Form, Label, Input, Button } from "./LoginForm.style";
import { modalStateHandler } from "../../util/modal/modal.utils";
import React from "react";

const LoginForm = ({
    modalRef,
    modalWrapRef,
    setIsLogin,
}: {
    modalRef: React.RefObject<HTMLDivElement>;
    modalWrapRef: React.RefObject<HTMLDivElement>;
    setIsLogin: (isLogin: boolean) => void;
}) => {
    const handlerLoginClick = () => {
        setIsLogin(true);
        modalStateHandler(modalRef, modalWrapRef, "close");
    };
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
                <Label>아이디</Label>
                <Input type="text" id="id" name="id" />
            </div>
            <div style={{ padding: "10px 0 0" }}>
                <Label>비밀번호</Label>
                <Input type="password" id="password" name="password" />
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
