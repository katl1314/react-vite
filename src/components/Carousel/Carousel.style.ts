import styled from "styled-components";
import { ICarouselImageSize } from "./Carousel.interface";

export const CarouselViewBox = styled.div<ICarouselImageSize>`
    width: ${({ width }: ICarouselImageSize) => `${width}px`};
    height: ${({ height }: ICarouselImageSize) => `${height}px`};

    & > ul {
        display: flex;
        overflow: hidden;
    }
`;

export const ImageList = styled.li`
    transition-duration: 1s;
`;
