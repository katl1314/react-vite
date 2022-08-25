import React from "react";

// 공통 인터페이스 정의

export interface IReactNode {
    children: React.ReactNode | React.ReactNode[];
}

export interface IReactElement {
    children: React.ReactElement[];
}
