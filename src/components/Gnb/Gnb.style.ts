import styled from "styled-components";

export const SubMenuContent = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    background: transparent; // 배경은 투명색
    color: white; // 글꼴 색상은 흰색
    border: 1px solid white; // 테두리 흰색
    margin: 5px; // 마진 5px
    cursor: pointer;
    // 트랜지션 (효과)
    transition-timing-function: ease-in;
    transition-duration: 0.5s;
    height: 35px;
    width: 85px;
    &:hover {
        background-color: white;
        color: black;
    }
`;
