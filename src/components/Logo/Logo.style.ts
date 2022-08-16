import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 20px; // 폰트
    height: 50px; // 높이
    font-weight: 600; // bold 굵기
    line-height: 50px; // 줄 높이
    font-family: "Happiness-Sans-Title";
    & > a {
        color: #fff; // 색상
        text-decoration: none;
    }
`;
