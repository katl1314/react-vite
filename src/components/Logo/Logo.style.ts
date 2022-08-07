import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 25px; // 폰트
    height: 70px; // 높이
    font-weight: 600; // bold 굵기
    line-height: 70px; // 줄 높이
    color: #fff; // 색상
    & > a {
        color: #fff;
        text-decoration: none;
    }
`;
