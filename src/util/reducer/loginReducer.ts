export type loginType = "login" | "logout";

export const loginReducer = (state: any, action: { type: loginType }) => {
    if (action.type == "login") {
        return { isLogin: true };
    }

    return { isLogin: false };
};
