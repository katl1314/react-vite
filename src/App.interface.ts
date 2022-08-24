export interface IApp {
    isLogin: boolean;
    id: string;
    password: string;
    isSlide: boolean;
}

export interface IReactNode {
    children: React.ReactNode | React.ReactNode[];
}
